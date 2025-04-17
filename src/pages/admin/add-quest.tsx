"use client"

import { useState, useEffect } from "react"
import { IconFile, IconArrowNarrowLeft, IconArrowNarrowRight, IconCloudUpload, IconCircleX, IconSquarePlus } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Common/CustomSelect"
import { motion } from "framer-motion"
import { InfoTooltip } from "@/components/Common/InfoTooltip"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useParams } from "react-router-dom"
import Header from "@/components/Common/Header"

type UploadedFile = {
  id: string;
  name: string;
  type: 'pdf' | 'ppt' | 'video' | 'link' | 'text';
  progress: number;
}

type BadgeType = "pre-designed" | "custom"
type Badge = "bronze" | "silver" | "gold" | "platinum"

export default function AddQuestPage() {
  const [questMode, setQuestMode] = useState<"Automatic" | "Manual">("Manual")
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedDocType, setSelectedDocType] = useState<string | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [lessonCompletion, setLessonCompletion] = useState(true)
  const [manualOverride, setManualOverride] = useState(false)
  const [badgeType, setBadgeType] = useState<BadgeType>("pre-designed")
  const [selectedBadgesPerLevel, setSelectedBadgesPerLevel] = useState<Record<number, Badge>>({
    3: "bronze",
    5: "bronze",
    7: "bronze"
  })

  const { id } = useParams();
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
    }
  }, [isEditMode, id]);

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else if (currentStep === 3) {
      setCurrentStep(4)
    } else if (currentStep === 4) {
      setCurrentStep(5)
    }
  }

  const handleSubmit = () => {
    alert("Quest submitted successfully!")
  }

  const handlePrevious = () => {
    if (currentStep === 5) {
      setCurrentStep(4)
    } else if (currentStep === 4) {
      setCurrentStep(3)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(1)
    }
  }

  const handleDocTypeSelect = (docType: string) => {
    setSelectedDocType(docType)
  }

  const handleBadgeSelect = (level: number, badge: Badge) => {
    setSelectedBadgesPerLevel(prev => ({
      ...prev,
      [level]: badge
    }))
  }

  const handleBadgeTypeChange = (value: BadgeType) => {
    setBadgeType(value);
    if (value === "custom") {
      setSelectedDocType("pdf");
    }
  }
  const handleBrowseFile = () => {
    if (!selectedDocType) return
    setIsUploading(true)

    const newFile: UploadedFile = {
      id: Math.random().toString(36).substring(2, 9),
      name: `graphic.${selectedDocType === 'pdf' ? 'zip' : selectedDocType}`,
      type: selectedDocType as UploadedFile['type'],
      progress: 0
    }

    setUploadedFiles(prev => [...prev, newFile])

    const interval = setInterval(() => {
      setUploadedFiles(prev =>
        prev.map(file =>
          file.id === newFile.id
            ? { ...file, progress: Math.min(file.progress + 10, 100) }
            : file
        )
      )
    }, 300)

    setTimeout(() => {
      clearInterval(interval)
      setIsUploading(false)
    }, 3000)
  }

  const handleDeleteFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const renderFileIcon = (type: UploadedFile['type']) => {
    switch (type) {
      case 'pdf':
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <img src="/images/quest-list/icon5.png" alt="pdf" className="w-5 h-5" />
          </div>
        )
      case 'ppt':
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <img src="/images/quest-list/icon6.png" alt="ppt" className="w-5 h-5" />
          </div>
        )
      case 'video':
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <img src="/images/quest-list/icon8.png" alt="video" className="w-5 h-5" />
          </div>
        )
      case 'link':
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <img src="/images/quest-list/icon9.png" alt="link" className="w-5 h-5" />
          </div>
        )
      case 'text':
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <img src="/images/quest-list/icon10.png" alt="text" className="w-5 h-5" />
          </div>
        )
      default:
        return (
          <div className="w-5 h-5 flex items-center justify-center">
            <IconFile size={44} stroke={1.5} className="text-white" />
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-[#131315]">
      {/* Main Content */}
      <div className="flex-1">
        <Header />
        {/* Content */}
        <div className="flex flex-col md:flex-row p-4 md:p-[30px] gap-4 md:gap-[30px] bg-backgroundColorV1 min-h-screen mt-20 md:pb-[30px] pb-[100px]">
          {/* Left Column */}
          <div
            style={{ background: "linear-gradient(to bottom, #1A191F, #251F32)" }}
            className="w-full md:w-[400px] rounded-[20px] p-[15px]">
            <div className="flex flex-col p-[15px] gap-3 bg-[#1C1B21] rounded-[10px] border border-[#242329] h-fit">
              <h2 className="text-white text-[22px] font-semibold">Welcome to Lurny</h2>
              <p className="text-[#AFAFAF] text-base font-normal">Complete the 5 steps to get started</p>
            </div>
            <div className="mt-[30px] px-[15px]">
              {[1, 2, 3, 4, 5].map((step) => (
                <>
                  {step > 1 && <div className="ml-[30px] w-[2px] h-[30px] bg-[#222127]"></div>}
                  <div
                    key={`step-${step}`}
                    className={`flex items-center gap-4  rounded-[10px] ${currentStep === step ? 'bg-mainColorV1' : step === 1 ? 'border border-[#222127]' : 'border border-[#222127]'} p-4`}
                  >
                    <div className={`w-[30px] h-[30px] rounded-[7px] border border-[#FFFFFF33]
                      ${currentStep === step ? 'bg-transparent text-white' :
                        step < currentStep ? 'bg-[#FFC35E] text-white' :
                          'text-[#AAAAAA] bg-[#1F1E24] border border-[#222127]'} 
                      flex items-center justify-center font-semibold text-sm`}
                    >
                      {step}
                    </div>
                    <span className={`text-white ${currentStep === step ? 'text-white font-bold' : 'text-[#AAAAAA]'}`}>
                      {step === 1 ? 'Quest Details' :
                        step === 2 ? 'Upload Document' :
                          step === 3 ? 'Define Skill Levels' :
                            step === 4 ? 'Gamification Settings' :
                              'Select Badges'}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-between">
            {/*Content fot step 1 */}
            {currentStep === 1 ? (
              <>
                <div className="flex flex-col p-[15px] gap-3 bg-[#1A191F] rounded-[10px] border border-[#242329] h-fit mb-[30px]">
                  <h2 className="text-white text-lg md:text-[22px] font-semibold">Quest Details</h2>
                  <p className="text-[#AFAFAF] text-sm md:text-base font-normal">Shows quest objectives, deadlines, progress, and required actions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Quest Title</label>
                    <Input
                      type="text"
                      placeholder="Enter quest title"
                      className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Quest Skills</label>
                    <Input
                      type="text"
                      placeholder="Enter Quest Skills"
                      className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Difficulty Levels</label>
                    <Select>
                      <SelectTrigger className="h-[50px]">
                        <SelectValue placeholder="Select Difficulty Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Skill Quest Level</label>
                    <Select>
                      <SelectTrigger className="h-[50px]">
                        <SelectValue placeholder="Select Skill Quest Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                          <SelectItem key={level} value={`level${level}`}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Select Quest Mode</label>
                  <div className="h-[50px] bg-white rounded-[5px] flex items-center p-[15px]">
                    <div className="flex gap-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="radio"
                            name="questMode"
                            value="Automatic"
                            checked={questMode === "Automatic"}
                            onChange={() => setQuestMode("Automatic")}
                            className="sr-only"
                          />
                          <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${questMode === "Automatic" ? "border-[#7F52BA]" : "border-[#444]"}`}>
                            {questMode === "Automatic" && (
                              <div className="absolute inset-1 rounded-full bg-[#7F52BA]"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-[#6C7278] font-semibold">Automatic</span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <div className="relative">
                          <input
                            type="radio"
                            name="questMode"
                            value="Manual"
                            checked={questMode === "Manual"}
                            onChange={() => setQuestMode("Manual")}
                            className="sr-only"
                          />
                          <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${questMode === "Manual" ? "border-[#7F52BA]" : "border-[#444]"}`}>
                            {questMode === "Manual" && (
                              <div className="absolute inset-1 rounded-full bg-[#7F52BA]"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-[#6C7278] font-semibold">Manual</span>
                      </label>
                    </div>
                  </div>
                </div>
              </>
            ) : currentStep === 2 ? (
              <>
                <div className="flex flex-col p-[15px] gap-3 bg-[#1A191F] rounded-[10px] border border-[#242329] h-fit mb-[30px]">
                  <h2 className="text-white text-lg md:text-[22px] font-semibold">Upload Document</h2>
                  <p className="text-[#AFAFAF] text-sm md:text-base font-normal">Choose the type of document you want to upload for lurnification.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* PDF Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'pdf' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('pdf')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon5.png" alt="pdf" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">PDFs Lurnification</div>
                  </div>

                  {/* PPTs Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'ppt' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('ppt')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon6.png" alt="ppt" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">PPTs Lurnification</div>
                  </div>

                  {/* SCROM Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'scrom' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('scrom')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon7.png" alt="scrom" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">SCROM Lurnification</div>
                  </div>

                  {/* Videos Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'video' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('video')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon8.png" alt="video" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">Videos Lurnification</div>
                  </div>

                  {/* Link Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'link' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('link')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon9.png" alt="link" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">Link Lurnification</div>
                  </div>

                  {/* Free text Lurnification */}
                  <div
                    className={`bg-[#1B1C1F] rounded-[20px] h-[72px] p-[15px] flex items-center justify-start hover:bg-[#1B1C1F]/80 transition cursor-pointer relative ${selectedDocType === 'text' ? 'ring-2 ring-mainColorV1' : ''}`}
                    onClick={() => handleDocTypeSelect('text')}
                    style={{ background: "linear-gradient(to left, #241D2F, #131315)" }}
                  >
                    <div className="mr-[15px] flex-shrink-0 h-10 w-10 rounded-[8px] bg-mainColorV1 flex items-center justify-center">
                      <img src="/images/quest-list/icon10.png" alt="text" className="w-5 h-5" />
                    </div>
                    <div>
                      <img src="/images/quest-list/upload-bg.png" alt="upload" className="w-auto h-[72px] absolute top-0 right-0 bottom-0" />
                    </div>
                    <div className="text-white text-base font-semibold">Free text Lurnification</div>
                  </div>
                </div>

                {(selectedDocType === 'pdf' || selectedDocType === 'ppt' || selectedDocType === 'scrom' || selectedDocType === 'video') && (
                  <div className="mt-[30px] border-t-[1px] border-[#3A393F] pt-[30px] flex flex-col md:flex-row gap-4 md:gap-[30px]">
                    <div className="flex-1 border border-dashed border-[#6C7278] rounded-[10px] flex flex-col items-center justify-center py-[75px] bg-transparent">
                      <IconCloudUpload className="text-white mb-5" size={30} />
                      <p className="text-white text-lg font-medium mb-5">Choose a file or drag & drop here</p>
                      <motion.button
                        className="bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center rounded-2xl h-[50px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleBrowseFile}
                      >
                        <span className='text-base font-bold'>Browse file</span>
                      </motion.button>
                    </div>

                    {uploadedFiles.length === 0 ? (
                      <div className="w-[250px] bg-[#242329] rounded-[10px] flex flex-col items-center justify-center p-4 gap-5">
                        <div className="w-[115px] h-[75px] relative">
                          <img
                            draggable={false}
                            src="/images/quest-list/folder.png"
                            alt="no-file"
                            className="h-full w-full object-contain"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              objectFit: 'contain',
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden'
                            }}
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                        <p className="text-[#AAAAAA] text-base">No File Here</p>
                      </div>
                    ) : (
                      <div className="w-[250px] flex flex-col gap-[10px]">
                        {uploadedFiles.map((file) => (
                          <div key={file.id} className="bg-[#28272D] rounded-[10px] overflow-hidden p-3">
                            <div className="flex items-center">
                              {renderFileIcon(file.type)}
                              <div className="flex-1 flex flex-col gap-2 ml-[10px]">
                                <div className="flex items-center justify-between">
                                  <p className="text-white font-medium">{file.name}</p>
                                  <button
                                    onClick={() => handleDeleteFile(file.id)}
                                  >
                                    <IconCircleX size={16} className="text-white" />
                                  </button>
                                </div>
                                {file.progress < 100 && (
                                  <div className="h-1 w-full bg-[#222127] relative">
                                    <div
                                      className="absolute top-0 left-0 h-full bg-[#2BF698] transition-all duration-300 rounded-full"
                                      style={{ width: `${file.progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {selectedDocType === 'link' && (
                  <div className="mt-[30px] border-t-[1px] border-[#3A393F] pt-[30px] flex flex-col md:flex-row gap-4 md:gap-[30px]">
                    <div className="flex-1">
                      <div>
                        <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Link Lurnification</label>
                        <Input
                          type="text"
                          placeholder="Paste link here"
                          className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                        />
                      </div>
                    </div>

                    {uploadedFiles.length === 0 ? (
                      <div className="w-[250px] bg-[#242329] rounded-[10px] flex flex-col items-center justify-center p-4 gap-5">
                        <div className="w-[115px] h-[75px] relative">
                          <img
                            draggable={false}
                            src="/images/quest-list/folder.png"
                            alt="no-file"
                            className="h-full w-full object-contain"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              objectFit: 'contain',
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden'
                            }}
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                        <p className="text-[#AAAAAA] text-base">No File Here</p>
                      </div>
                    ) : (
                      <div className="w-[250px] flex flex-col gap-[10px]">
                        {uploadedFiles.map((file) => (
                          <div key={file.id} className="bg-[#28272D] rounded-[10px] overflow-hidden p-3">
                            <div className="flex items-center">
                              {renderFileIcon(file.type)}
                              <div className="flex-1 flex flex-col gap-2 ml-[10px]">
                                <div className="flex items-center justify-between">
                                  <p className="text-white font-medium">{file.name}</p>
                                  <button
                                    onClick={() => handleDeleteFile(file.id)}
                                  >
                                    <IconCircleX size={16} className="text-white" />
                                  </button>
                                </div>
                                {file.progress < 100 && (
                                  <div className="h-1 w-full bg-[#222127] relative">
                                    <div
                                      className="absolute top-0 left-0 h-full bg-[#2BF698] transition-all duration-300 rounded-full"
                                      style={{ width: `${file.progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {selectedDocType === 'text' && (
                  <div className="mt-[30px] border-t-[1px] border-[#3A393F] pt-[30px] flex flex-col md:flex-row gap-4 md:gap-[30px]">
                    <div className="flex-1">
                      <div>
                        <label className="block text-[#6C7278] text-base font-medium mb-[10px]">Free text Lurnification</label>
                        <Input
                          type="text"
                          placeholder="Enter Text here"
                          className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                        />
                      </div>
                    </div>

                    {uploadedFiles.length === 0 ? (
                      <div className="w-[250px] bg-[#242329] rounded-[10px] flex flex-col items-center justify-center p-4 gap-5">
                        <div className="w-[115px] h-[75px] relative">
                          <img
                            draggable={false}
                            src="/images/quest-list/folder.png"
                            alt="no-file"
                            className="h-full w-full object-contain"
                            style={{
                              imageRendering: '-webkit-optimize-contrast',
                              objectFit: 'contain',
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden'
                            }}
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                        <p className="text-[#AAAAAA] text-base">No File Here</p>
                      </div>
                    ) : (
                      <div className="w-[250px] flex flex-col gap-[10px]">
                        {uploadedFiles.map((file) => (
                          <div key={file.id} className="bg-[#28272D] rounded-[10px] overflow-hidden p-3">
                            <div className="flex items-center">
                              {renderFileIcon(file.type)}
                              <div className="flex-1 flex flex-col gap-2 ml-[10px]">
                                <div className="flex items-center justify-between">
                                  <p className="text-white font-medium">{file.name}</p>
                                  <button
                                    onClick={() => handleDeleteFile(file.id)}
                                  >
                                    <IconCircleX size={16} className="text-white" />
                                  </button>
                                </div>
                                {file.progress < 100 && (
                                  <div className="h-1 w-full bg-[#222127] relative">
                                    <div
                                      className="absolute top-0 left-0 h-full bg-[#2BF698] transition-all duration-300 rounded-full"
                                      style={{ width: `${file.progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : currentStep === 3 ? (
              <>
                <div className="flex flex-col p-[15px] gap-3 bg-[#1A191F] rounded-[10px] border border-[#242329] h-fit mb-[30px]">
                  <h2 className="text-white text-lg md:text-[22px] font-semibold">Define Skill Levels & Progression Rules</h2>
                  <p className="text-[#AFAFAF] text-sm md:text-base font-normal">Skill levels define a structured progression system that measures proficiency in a given domain.</p>
                </div>

                {/* Content for step 3 - Gamification Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {/* Level Range */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Level Range
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Select>
                      <SelectTrigger className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium">
                        <SelectValue placeholder="Select Level Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                          <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Progression Rule */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Progression Rule
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Select>
                      <SelectTrigger className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium">
                        <SelectValue placeholder="Select Progression Rule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sequential">Sequential</SelectItem>
                        <SelectItem value="skill-based">Skill-based</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {/* Quiz Pass Percentage */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Quiz Pass Percentage ( 0-100 )
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter Quiz Pass Percentage"
                      className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                    />
                  </div>

                  {/* Lesson Completion */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Lesson Completion
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <div className="flex items-center justify-between bg-white h-[50px] px-4 rounded-[5px]">
                      <span className="text-[#6C7278] text-base font-medium">Lesson Completion</span>
                      <button
                        className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ${lessonCompletion ? 'bg-mainColorV1' : 'bg-gray-300'}`}
                        onClick={() => setLessonCompletion(!lessonCompletion)}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${lessonCompletion ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {/* Assessment Attempts Allowed */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Assessment Attempts Allowed
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter Assessment Attempts Allowed"
                      className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                    />
                  </div>

                  {/* Manual Override */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Manual Override
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <div className="flex items-center justify-between bg-white h-[50px] px-4 rounded-[5px]">
                      <span className="text-[#6C7278] text-base font-medium">Manual Override</span>
                      <button
                        className={`w-11 h-6 rounded-full p-1 transition-colors duration-200 ${manualOverride ? 'bg-mainColorV1' : 'bg-gray-300'}`}
                        onClick={() => setManualOverride(!manualOverride)}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${manualOverride ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {/* Certification Issuance */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Certification Issuance
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Select>
                      <SelectTrigger className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium">
                        <SelectValue placeholder="Select Certification Issuance" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                          <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Badges & Rewards */}
                  <div>
                    <div className="text-[#6C7278] text-base font-medium mb-[10px] flex gap-[10px] items-center">
                      Badges & Rewards
                      <div className="h-[10px] w-[1px] bg-[#414047]"></div>
                      <InfoTooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <Select>
                      <SelectTrigger className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium">
                        <SelectValue placeholder="Badges & Rewards" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="achievement">Achievement Badges</SelectItem>
                        <SelectItem value="skill">Skill Badges</SelectItem>
                        <SelectItem value="custom">Custom Rewards</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            ) : currentStep === 4 ? (
              <>
                <div className="flex flex-col p-[15px] gap-3 bg-[#1A191F] rounded-[10px] border border-[#242329] h-fit mb-2">
                  <h2 className="text-white text-lg md:text-[22px] font-semibold">Gamification Settings / XP Setting</h2>
                  <p className="text-[#AFAFAF] text-sm md:text-base font-normal">Users advance through predefined skill levels based on performance and achievements.</p>
                </div>

                <div className="mb-6">
                  <div>
                    <div className="text-[#6C7278] text-sm md:text-base font-medium mb-[10px] flex flex-col md:flex-row gap-[10px] items-start md:items-end justify-between">
                      Activity
                      <motion.button
                        className="w-full md:w-auto bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center justify-center md:justify-start rounded-2xl h-[46px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconSquarePlus size={18} className='flex-shrink-0' />
                        <span className='text-xs font-bold'>Add</span>
                      </motion.button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Select>
                        <SelectTrigger className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium">
                          <SelectValue placeholder="Waching Video" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="waching-video">Watching a Video</SelectItem>
                          <SelectItem value="completing-lesson">Completing a Lesson</SelectItem>
                          <SelectItem value="answering-quiz">Answering a Quiz</SelectItem>
                          <SelectItem value="scoring-80-quiz">Scoring 80%+ on Quiz</SelectItem>
                          <SelectItem value="completing-level">Completing a Level</SelectItem>
                          <SelectItem value="earning-badge">Earning a Badge</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="text"
                        value={"10 XP"}
                        placeholder="Enter XP"
                        className="h-[50px] bg-white text-[#6C7278] placeholder:text-[#6C7278] text-base font-medium"
                      />
                    </div>
                  </div>

                </div>
              </>
            ) : (
              <>
                 <div className="flex flex-col p-[15px] gap-3 bg-[#1A191F] rounded-[10px] border border-[#242329] h-fit mb-[30px]">
                  <h2 className="text-white text-lg md:text-[22px] font-semibold">Select Badges</h2>
                  <p className="text-[#AFAFAF] text-sm md:text-base font-normal">Different types of badges based on skills, experience, or special achievements.</p>
                </div>
                <div className="space-y-[10px]">
                  {[3, 5, 7].map((level) => (
                    <div key={level} className="bg-[#26252B] rounded-[15px] p-[15px]">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 bg-[#212026] rounded-[6px] p-[15px] gap-4 md:gap-0">
                        <h2 className="text-white text-sm md:text-base font-medium">Selected Badges For Level {level}</h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                          <span className="text-white text-sm font-medium">Type Of Badges :</span>
                          <RadioGroup
                            value={badgeType}
                            onValueChange={(value) => handleBadgeTypeChange(value as BadgeType)}
                            className="flex flex-col md:flex-row items-start md:items-center gap-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="pre-designed" id={`pre-designed-${level}`} className="border-[#6C7278] data-[state=checked]:border-white data-[state=checked]:text-white text-transparent" />
                              <Label htmlFor={`pre-designed-${level}`} className="text-white text-sm font-medium">Pre - Designed Badges</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="custom" id={`custom-${level}`} className="border-[#6C7278] data-[state=checked]:border-white data-[state=checked]:text-white text-transparent" />
                              <Label htmlFor={`custom-${level}`} className="text-[#6C7278] text-sm font-medium">Custom Badges</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      {badgeType === "pre-designed" ? (
                        <div className="flex flex-wrap gap-[15px] justify-center md:justify-start">
                          {["bronze", "silver", "gold", "platinum"].map((badge) => (
                            <div
                              key={badge}
                              className={`relative cursor-pointer group`}
                              onClick={() => handleBadgeSelect(level, badge as Badge)}
                            >
                              
                              <div className="bg-[#28272D] rounded-[10px] p-[5px] flex flex-col items-center justify-center group-hover:bg-[#2A2A2A] transition-colors relative border border-[#2E2D33] w-[100px] h-fit">
                              <RadioGroup 
                                value={selectedBadgesPerLevel[level]} 
                                onValueChange={(value) => handleBadgeSelect(level, value as Badge)}
                                className="flex items-center space-x-2 absolute top-[5px] right-[5px]"
                              >
                                <RadioGroupItem 
                                value={badge} id={`badge-${level}-${badge}`} className="border-[#6C7278] data-[state=checked]:border-mainColorV1 data-[state=checked]:text-mainColorV1 text-transparent" />
                              </RadioGroup>
                                <div className="mt-[5px] h-[98px] w-[86px] mb-[5px] flex items-center justify-center">
                                  <img 
                                    src={`/images/quest-list/${badge}.png`} 
                                    alt={`${badge} badge`} 
                                    width={100} 
                                    height={100} 
                                    className="object-contain"
                                    draggable={false}
                                  />
                                </div>
                                <span className="text-white capitalize text-sm font-medium">{badge}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col md:flex-row gap-[15px]">
                          <div className="flex-1 border border-dashed border-[#6C7278] rounded-[10px] flex flex-col items-center justify-center py-[30px] bg-transparent">
                            <IconCloudUpload className="text-white mb-5" size={30} />
                            <p className="text-white text-lg font-medium mb-5">Choose a file or drag & drop here</p>
                            <motion.button
                              className="bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center rounded-2xl h-[50px]"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              onClick={handleBrowseFile}
                            >
                              <span className='text-base font-bold'>Browse file</span>
                            </motion.button>
                          </div>

                          {uploadedFiles.length === 0 ? (
                            <div className="w-[250px] bg-[#242329] rounded-[10px] flex flex-col items-center justify-center p-4 gap-5">
                              <div className="w-[115px] h-[75px] relative">
                                <img
                                  draggable={false}
                                  src="/images/quest-list/folder.png"
                                  alt="no-file"
                                  className="h-full w-full object-contain"
                                  style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                    objectFit: 'contain',
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden'
                                  }}
                                  loading="eager"
                                  decoding="sync"
                                />
                              </div>
                              <p className="text-[#AAAAAA] text-base">No File Here</p>
                            </div>
                          ) : (
                            <div className="w-[250px] flex flex-col gap-[10px]">
                              {uploadedFiles.map((file) => (
                                <div key={file.id} className="bg-[#28272D] rounded-[10px] overflow-hidden p-3">
                                  <div className="flex items-center">
                                    {renderFileIcon(file.type)}
                                    <div className="flex-1 flex flex-col gap-2 ml-[10px]">
                                      <div className="flex items-center justify-between">
                                        <p className="text-white font-medium">{file.name}</p>
                                        <button
                                          onClick={() => handleDeleteFile(file.id)}
                                        >
                                          <IconCircleX size={16} className="text-white" />
                                        </button>
                                      </div>
                                      {file.progress < 100 && (
                                        <div className="h-1 w-full bg-[#222127] relative">
                                          <div
                                            className="absolute top-0 left-0 h-full bg-[#2BF698] transition-all duration-300 rounded-full"
                                            style={{ width: `${file.progress}%` }}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex flex-1 h-full justify-center md:justify-end items-end space-x-4 mt-[30px]">
              <div className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
                {currentStep !== 1 && (
                  <motion.button
                    className="w-full md:w-auto bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center justify-center rounded-2xl h-[50px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handlePrevious}
                  >
                    <IconArrowNarrowLeft size={24} className='flex-shrink-0' />
                    <span className='text-base font-bold'>Previous</span>
                  </motion.button>
                )}

                {currentStep === 5 ? (
                  <motion.button
                    className="w-full md:w-auto bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center justify-center rounded-2xl h-[50px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleSubmit}
                  >
                    <span className='text-base font-bold'>Submit</span>
                  </motion.button>
                ) : (
                  <motion.button
                    className="w-full md:w-auto bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-5 py-[15px] flex gap-[10px] items-center justify-center rounded-2xl h-[50px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleNext}
                  >
                    <span className='text-base font-bold'>Next</span>
                    <IconArrowNarrowRight size={24} className='flex-shrink-0' />
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
