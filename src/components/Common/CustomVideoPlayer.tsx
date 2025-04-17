"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize, MoreVertical } from "lucide-react"

interface CustomVideoPlayerProps {
  src: string
}

export default function CustomVideoPlayer({ src }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  // Format time to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume || 0.5
        setIsMuted(false)
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * duration
    }
  }

  // Handle progress bar drag
  const handleProgressDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      videoRef.current.currentTime = pos * duration
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  // Update time display
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => {
      setCurrentTime(video.currentTime)
    }

    const updateDuration = () => {
      setDuration(video.duration)
    }

    const handleEnd = () => {
      setIsPlaying(false)
    }

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateDuration)
    video.addEventListener("ended", handleEnd)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateDuration)
      video.removeEventListener("ended", handleEnd)
    }
  }, [])

  // Add mouse move and mouse up event listeners for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressRef.current && videoRef.current) {
        const rect = progressRef.current.getBoundingClientRect()
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
        videoRef.current.currentTime = pos * duration
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, duration])

  return (
    <div className="relative rounded-xl overflow-hidden bg-black">
      {/* Video element */}
      <video ref={videoRef} className="w-full aspect-video" onClick={togglePlay} playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* More options button */}
      <button className="absolute top-2 md:top-4 right-2 md:right-4 text-white p-1">
        <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 md:pt-10 pb-2 md:pb-4 px-2 md:px-4">
        {/* Progress bar */}
        <div
          ref={progressRef}
          className="w-full h-1 bg-white/20 rounded-full mb-2 md:mb-4 cursor-pointer relative"
          onClick={handleProgressClick}
          onMouseDown={(e) => {
            setIsDragging(true)
            handleProgressDrag(e)
          }}
        >
          <div
            className="absolute top-0 left-0 h-full bg-amber-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-amber-500 rounded-full"
            style={{ left: `${(currentTime / duration) * 100}%`, transform: "translateY(-50%) translateX(-50%)" }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-4">
            {/* Volume control - Hide on mobile */}
            <button onClick={toggleMute} className="text-white">
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 accent-white h-1 bg-white/20 rounded-full"
            />
          </div>

          <div className="flex items-center space-x-2 md:space-x-6 mx-auto md:mx-0">
            {/* Current time */}
            <span className="text-white text-xs md:text-sm font-medium">{formatTime(currentTime)}</span>

            {/* Playback controls */}
            <button onClick={() => skip(-10)} className="text-white">
              <SkipBack className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button onClick={togglePlay} className="text-white">
              {isPlaying ? <Pause className="w-6 h-6 md:w-8 md:h-8" /> : <Play className="w-6 h-6 md:w-8 md:h-8" />}
            </button>

            <button onClick={() => skip(10)} className="text-white">
              <SkipForward className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Duration */}
            <span className="text-white text-xs md:text-sm font-medium">{formatTime(duration)}</span>
          </div>

          {/* Fullscreen button */}
          <button onClick={toggleFullscreen} className="text-white">
            <Maximize className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
