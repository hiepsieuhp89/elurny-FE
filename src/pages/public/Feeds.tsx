"use client"

import { useState } from "react"
import { IconDotsVertical, IconHeart, IconShare, IconTrash, IconPencil } from "@tabler/icons-react"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/Common/CustomSelect"
import CustomVideoPlayer from "@/components/Common/CustomVideoPlayer"
import { lurniesItems, podcastItems, pptItems, videoItems } from "@/mock/mockData"
import { motion } from "framer-motion"
import Header from "@/components/Common/Header"
import useMobile from "@/hooks/useMobile"

interface BaseItem {
  id: number;
  author: string;
  time: string;
  title: string;
  type: string;
  stubs: number;
  quizzes: number;
  views: number;
  description?: string;
}

interface ImageItem extends BaseItem {
  src: string;
}

interface VideoItem extends BaseItem {
  src: string;
}

interface PodcastItem extends BaseItem {
  audio: string;
  description: string;
}

interface PPTItem extends BaseItem {
  src: string;
  slides: number;
}

type FeedItem = BaseItem | ImageItem | VideoItem | PodcastItem | PPTItem;

function isVideoItem(item: FeedItem): item is VideoItem {
  return 'src' in item && typeof item.src === 'string' && 
    (item.src.endsWith('.mp4') || item.src.includes('gtv-videos-bucket'));
}

function hasSrc(item: FeedItem): item is (ImageItem | VideoItem | PPTItem) {
  return 'src' in item && typeof item.src === 'string';
}

function hasDescription(item: FeedItem): item is (BaseItem & {description: string}) {
  return 'description' in item && typeof item.description === 'string';
}

export default function FeedsPage() {
  const [activeTab, setActiveTab] = useState("Lurnies")
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const isMobile = useMobile()
  const colors = {
    mainColor: "#7F52BA",
    activeColor: "#FFC35E",
    backgroundColor: "#212026",
    cardColor: "#424242",
    backgroundDarkColor: "#131315",
    borderColor: "#222127",
    textColor: "#AAAAAA",
  }

  const tabs = ["Lurnies", "Video", "Podcast", "PPT"]

  const getActiveTabData = () => {
    switch (activeTab) {
      case "Video":
        return videoItems;
      case "Podcast":
        return podcastItems;
      case "PPT":
        return pptItems;
      default:
        return lurniesItems;
    }
  }

  const toggleMenu = (id: number) => {
    if (openMenuId === id) {
      setOpenMenuId(null)
    } else {
      setOpenMenuId(id)
    }
  }

  const closeMenu = () => {
    setOpenMenuId(null)
  }
  const feedItems = getActiveTabData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
    {isMobile && <Header />}
    <motion.div 
      className="min-h-screen p-[15px] md:p-[30px] bg-backgroundColorV1 pb-[100px] md:pb-[30px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-white text-2xl md:text-4xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Feeds
          </motion.h1>
          <Select>
            <SelectTrigger className="w-[90px] md:w-[116px] bg-cardColorV1 text-white border-none">2025</SelectTrigger>
            <SelectContent className="w-[90px] md:w-[116px]" align="end">
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <motion.div 
          className="flex gap-2 md:gap-4 bg-[#28272D] rounded-[10px] p-[6px] w-fit overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className="p-[8px] md:p-[10px] rounded-[8px] text-sm md:text-base font-medium whitespace-nowrap"
              style={{
                backgroundColor: activeTab === tab ? colors.mainColor : "transparent",
                color: activeTab === tab ? "white" : colors.textColor,
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Item */}
          {feedItems.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={`bg-cardColorV1 p-3 md:p-5 rounded-lg overflow-hidden relative flex flex-col`}
            >
              <div className="flex justify-between items-start mb-[15px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[42px] h-[42px] rounded-full overflow-hidden flex items-center justify-center border border-[#4C4B51]">
                    <img
                      src="/images/sample-img.png"
                      alt={feedItems[0].author}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-lg">{feedItems[0].author}</p>
                    <p className="text-xs text-[#BCBCBC]">
                      {feedItems[0].time}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    className="text-white"
                    onClick={() => toggleMenu(feedItems[0].id)}
                  >
                    <IconDotsVertical size={20} className="flex-shrink-0 text-white" />
                  </button>
                  {openMenuId === feedItems[0].id && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#353535] rounded-md shadow-lg z-20 overflow-hidden">
                      <div className="py-1" onClick={closeMenu}>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconHeart size={16} className="mr-2" />
                          Like
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconShare size={16} className="mr-2" />
                          Share
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconPencil size={16} className="mr-2" />
                          Edit
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#424242] w-full text-left">
                          <IconTrash size={16} className="mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {isVideoItem(feedItems[0]) ? (
                <div className="flex-grow w-full mb-[15px]">
                  <CustomVideoPlayer src={feedItems[0].src} />
                </div>
              ) : hasSrc(feedItems[0]) ? (
                <div className="flex-grow w-full h-[200px] md:h-[320px] relative rounded-[15px] overflow-hidden mb-[15px]">
                  <img
                    src="/images/sample-img.png"
                    alt={feedItems[0].title}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>
              ) : null}
              <div>
                {feedItems[0].title && <h3 className="text-white font-medium">{feedItems[0].title}</h3>}
                {hasDescription(feedItems[0]) && (
                  <p style={{ color: colors.textColor }} className="text-sm mt-2">
                    {feedItems[0].description}
                  </p>
                )}
              </div>
            </motion.div>
          )}
          {/* 4 next items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px] h-full">
          {feedItems.slice(1, 5).map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`bg-cardColorV1 p-[10px] rounded-lg overflow-hidden relative h-full flex flex-col ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex justify-between items-start mb-[15px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[42px] h-[42px] rounded-full overflow-hidden flex items-center justify-center border border-[#4C4B51]">
                    <img
                      src="/images/sample-img.png"
                      alt={item.author}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-sm">{item.author}</p>
                    <p className="text-xs text-[#BCBCBC]">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    className="text-white"
                    onClick={() => toggleMenu(item.id)}
                  >
                    <IconDotsVertical size={20} className="flex-shrink-0 text-white" />
                  </button>
                  {openMenuId === item.id && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#353535] rounded-md shadow-lg z-20 overflow-hidden">
                      <div className="py-1" onClick={closeMenu}>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconHeart size={16} className="mr-2" />
                          Like
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconShare size={16} className="mr-2" />
                          Share
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconPencil size={16} className="mr-2" />
                          Edit
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#424242] w-full text-left">
                          <IconTrash size={16} className="mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {isVideoItem(item) ? (
                <div className="w-full mb-[15px]">
                  <CustomVideoPlayer src={item.src} />
                </div>
              ) : hasSrc(item) ? (
                <div className="w-full aspect-video relative rounded-[15px] max-h-[114px] overflow-hidden mb-[15px]">
                  <img
                    src="/images/sample-img.png"
                    alt={item.title}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>
              ) : null}
              
              <div className="mt-auto">
                {item.title && <h3 className="text-white font-bold text-xs">{item.title}</h3>}
                {hasDescription(item) && (
                  <p style={{ color: colors.textColor }} className="text-sm mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[30px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {feedItems.slice(5).map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`bg-cardColorV1 p-3 md:p-5 rounded-lg overflow-hidden relative flex flex-col h-full ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex justify-between items-start mb-[15px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full overflow-hidden flex items-center justify-center border border-[#4C4B51]">
                    <img
                      src="/images/sample-img.png"
                      alt={item.author}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-base md:text-lg">{item.author}</p>
                    <p className="text-xs text-[#BCBCBC]">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    className="text-white"
                    onClick={() => toggleMenu(item.id)}
                  >
                    <IconDotsVertical size={20} className="flex-shrink-0 text-white" />
                  </button>
                  {openMenuId === item.id && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-[#353535] rounded-md shadow-lg z-20 overflow-hidden">
                      <div className="py-1" onClick={closeMenu}>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconHeart size={16} className="mr-2" />
                          Like
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconShare size={16} className="mr-2" />
                          Share
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#424242] w-full text-left">
                          <IconPencil size={16} className="mr-2" />
                          Edit
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#424242] w-full text-left">
                          <IconTrash size={16} className="mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {isVideoItem(item) ? (
                <div className="w-full mb-[15px]">
                  <CustomVideoPlayer src={item.src} />
                </div>
              ) : hasSrc(item) ? (
                <div className="w-full aspect-video relative rounded-[15px] overflow-hidden mb-[15px]">
                  <img
                    src="/images/sample-img.png"
                    alt={item.title}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>
              ) : null}
              <div className="mt-auto">
                {item.title && <h3 className="text-white font-medium text-sm md:text-base mb-2">{item.title}</h3>}
                {hasDescription(item) && (
                  <p style={{ color: colors.textColor }} className="text-xs md:text-sm mb-3">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
    </>
  )
} 