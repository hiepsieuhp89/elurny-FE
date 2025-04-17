"use client"

import { useState, useEffect, useRef } from "react"
import { IconSearch, IconMicrophone, IconSend } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { defaultResponse, suggestions, topicResponses } from "@/mock/mockData"
import { motion, AnimatePresence } from "framer-motion"
import useMobile from "@/hooks/useMobile"
import Header from "@/components/Common/Header"
export default function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [activeTab, setActiveTab] = useState("emvees")
    const [showChat, setShowChat] = useState(false)
    const [chatMessages, setChatMessages] = useState<{isUser: boolean, text: string, dots?: boolean, id: string}[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const isMobile = useMobile()
    const chatContainerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages, isTyping])

    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    const handleSelectSuggestion = (suggestion: string) => {
        setSearchTerm(suggestion)
        setShowSuggestions(false)
        setShowChat(true)
        
        const userMessageId = Date.now().toString()
        setChatMessages([{ isUser: true, text: suggestion, id: userMessageId }])
        
        setIsTyping(true)
        
        setTimeout(() => {
            setIsTyping(false)
            const response = topicResponses[suggestion] || defaultResponse
            setChatMessages(prev => [...prev, { isUser: false, text: response, id: (Date.now() + 1).toString() }])
        }, 2000)
    }
    
    const handleSendMessage = () => {
        if (searchTerm.trim() === "") return
        
        const userMessage = searchTerm
        setSearchTerm("")
        setShowChat(true)
        
        const userMessageId = Date.now().toString()
        setChatMessages(prev => [...prev, { isUser: true, text: userMessage, id: userMessageId }])
        
        setIsTyping(true)
        
        setTimeout(() => {
            setIsTyping(false)
            
            const response = topicResponses[userMessage] || defaultResponse
            
            setChatMessages(prev => [...prev, { isUser: false, text: response, id: (Date.now() + 1).toString() }])
        }, 2000)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1 
            }
        }
    }

    const messageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 15 
            }
        }
    }

    const pulseVariants = {
        pulse: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop" as const
            }
        }
    }

    const typingVariants = {
        initial: { scale: 0.8, opacity: 0.3 },
        animate: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 0.6
            }
        })
    }

    return (
        <>
        {isMobile && <Header />}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-[calc(100vh-64px)] flex-col relative md:p-[30px] p-[15px]"
        >
            <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white md:text-4xl text-2xl font-semibold mb-4 md:mb-6"
            >
                ChatBot
            </motion.h1>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-[15px] md:gap-[30px]`}>
                {/* Sidebar */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${isMobile ? 'w-full' : 'w-[300px]'} min-h-[200px] md:min-h-[calc(100vh-124px)] flex flex-col flex-shrink-0 rounded-[20px] p-[15px]`}
                    style={{ background: "linear-gradient(to bottom, #1A191F, #251F32)" }}
                >
                    <div className="flex justify-between items-center pb-[15px] border-b border-b-borderColorV1">
                        <h2 className="text-lg font-semibold text-white">Chat History</h2>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-[#28272D] rounded-full flex items-center justify-center cursor-pointer"
                        >
                            <img src="/images/broom-icon.svg" alt="broom-icon" className="w-[22px] h-[22px] object-contain" />
                        </motion.div>
                    </div>
                    {/* Section 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col gap-[10px] items-center justify-center flex-1 h-full py-4"
                    >
                        <motion.div 
                            animate="pulse" 
                            variants={pulseVariants}
                            className="w-[120px] md:w-[144px] h-[100px] md:h-[118px] relative"
                        >
                            <img
                                draggable={false}
                                height={200}
                                width={200}
                                src="/images/chatbot/empty.png" alt="" className="w-full h-full object-contain" />
                        </motion.div>
                        <h1 className="text-white text-lg font-semibold">No Data Found!</h1>
                        <p className="text-[#666666] text-sm font-normal text-center">There Is No Data to Show You Right Now</p>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ background: "linear-gradient(to bottom, #1A191F, #251F32)" }}
                    className={`flex-grow flex flex-col px-[20px] md:px-[50px] rounded-[20px] ${isMobile ? 'mb-[100px]' : ''}`}
                >
                    {!showChat ? (
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-center my-[20px] md:my-[30px] flex-grow flex flex-col items-center justify-center"
                        >
                            <motion.h1 
                                animate={{ 
                                    scale: [1, 1.02, 1],
                                    transition: { 
                                        duration: 4, 
                                        repeat: Infinity,
                                        repeatType: "reverse" 
                                    }
                                }}
                                className="text-2xl md:text-3xl font-bold text-white text-center"
                            >
                                Hello Aaush, What Do You Want To Know?
                            </motion.h1>
                        </motion.div>
                    ) : (
                        <div className="flex-grow flex flex-col mt-4 mb-4 overflow-hidden h-[400px]">
                            <div 
                                ref={chatContainerRef}
                                className="flex-grow pr-4 mb-4 overflow-y-auto h-full"
                                style={{ scrollBehavior: 'smooth' }}
                            >
                                <motion.div 
                                    className="flex flex-col gap-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <AnimatePresence>
                                        {chatMessages.map((message) => (
                                            <motion.div 
                                                key={message.id} 
                                                variants={messageVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit={{ opacity: 0, x: message.isUser ? 100 : -100 }}
                                                className={`flex items-start ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                            >
                                                {!message.isUser && (
                                                    <motion.div 
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-8 h-8 md:w-10 md:h-10 bg-activeColorV1 rounded-full overflow-hidden mr-[10px] md:mr-[15px] flex-shrink-0 flex items-center justify-center"
                                                    >
                                                        <img 
                                                            src={"/images/chatbot/bot.png"} 
                                                            alt="Bot" 
                                                            className="w-3 h-3 md:w-4 md:h-4 object-cover"
                                                        />
                                                    </motion.div>
                                                )}
                                                <motion.div 
                                                    initial={{ opacity: 0, scale: 0.8, x: message.isUser ? 50 : -50 }}
                                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                    className={`max-w-[85%] md:max-w-[70%] rounded-[10px] py-3 md:py-5 px-3 ${message.isUser ? 'bg-[#27272C] text-white' : 'bg-[#27272C] text-white'}`}
                                                >
                                                    <p className="whitespace-pre-line text-xs md:text-sm font-normal">{message.text}</p>
                                                </motion.div>
                                                {message.isUser && (
                                                    <motion.div 
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-8 h-8 md:w-10 md:h-10 bg-activeColorV1 rounded-full overflow-hidden ml-[10px] md:ml-[15px] flex-shrink-0 flex items-center justify-center"
                                                    >
                                                        <img 
                                                            src={"/images/chatbot/bot.png"} 
                                                            alt="User" 
                                                            className="w-3 h-3 md:w-4 md:h-4 object-cover"
                                                        />
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {isTyping && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-start justify-start"
                                        >
                                            <motion.div 
                                                whileHover={{ scale: 1.1 }}
                                                className="w-8 h-8 md:w-10 md:h-10 bg-activeColorV1 rounded-full overflow-hidden mr-[10px] md:mr-[15px] flex-shrink-0 flex items-center justify-center"
                                            >
                                                <img 
                                                    src={"/images/chatbot/bot.png"} 
                                                    alt="Bot" 
                                                    className="w-3 h-3 md:w-4 md:h-4 object-cover"
                                                />
                                            </motion.div>
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                                transition={{ type: "spring" }}
                                                className="max-w-[85%] md:max-w-[70%] rounded-[20px] p-3 md:p-4 bg-backgroundColorV2 text-white"
                                            >
                                                <div className="flex items-center gap-1">
                                                    <motion.div
                                                        custom={0}
                                                        variants={typingVariants}
                                                        initial="initial"
                                                        animate="animate" 
                                                        className="w-2 h-2 bg-[#D9D9D9] rounded-full"
                                                    ></motion.div>
                                                    <motion.div
                                                        custom={1}
                                                        variants={typingVariants}
                                                        initial="initial"
                                                        animate="animate" 
                                                        className="w-2 h-2 bg-[#D9D9D9] rounded-full"
                                                    ></motion.div>
                                                    <motion.div 
                                                        custom={2}
                                                        variants={typingVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        className="w-2 h-2 bg-activeColorV1 rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    )}

                    <motion.div 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full border border-[#403F42] rounded-[20px] mb-4"
                    >
                        <div
                            className="relative rounded-lg"
                        >
                            <div className="flex items-center p-4">
                                <IconSearch className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Message Lurny Chatbot"
                                    className="bg-transparent border-none outline-none flex-grow !text-[#666666] placeholder:text-[#666666] text-sm font-normal"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value)
                                        setShowSuggestions(e.target.value.trim() !== "")
                                    }}
                                    onFocus={() => setShowSuggestions(searchTerm.trim() !== "")}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && searchTerm.trim() !== "") {
                                            handleSendMessage();
                                        }
                                    }}
                                />
                            </div>

                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between px-4 bg-backgroundColorV2 rounded-[20px] py-3 md:py-0 md:h-[64px]`}>
                                <div className={`flex ${isMobile ? 'flex-wrap justify-center w-full mb-3' : ''} items-center gap-2 md:gap-5`}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className={`flex items-center justify-center text-[10px] md:text-xs font-bold rounded-[10px] md:mr-2 ${activeTab === "emvees" ? "text-white bg-mainColorV1 h-8 md:h-10 border-mainColorV1" : "text-white border border-mainColorV1 h-8 md:h-10"}`}
                                            onClick={() => setActiveTab("emvees")}
                                        >
                                            Emvees knowledge
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className={`flex items-center justify-center text-[10px] md:text-xs font-bold rounded-[10px] md:mr-2 ${activeTab === "global" ? "text-white bg-mainColorV1 h-8 md:h-10 border-mainColorV1" : "text-white border border-mainColorV1 h-8 md:h-10"}`}
                                            onClick={() => setActiveTab("global")}
                                        >
                                            Global knowledge
                                        </Button>
                                    </motion.div>
                                </div>
                                <div className="flex items-center gap-[15px]">
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <Button
                                            className="w-8 h-8 md:w-10 md:h-10 bg-mainColorV1 rounded-full flex items-center justify-center"
                                        >
                                            <IconMicrophone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <Button
                                            className="w-8 h-8 md:w-10 md:h-10 bg-mainColorV1 rounded-full flex items-center justify-center"
                                            onClick={handleSendMessage}
                                        >
                                            <IconSend className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <AnimatePresence>
                        {showSuggestions && searchTerm.trim() !== "" && (
                            <motion.div 
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                className="mt-[15px] overflow-hidden w-full bg-white rounded-[10px] p-[15px]"
                            >
                                <ScrollArea className={`${filteredSuggestions.length > 0 ? "h-[150px] md:h-[215px]" : "h-fit"}`}>
                                    {filteredSuggestions.length > 0 ? (
                                        filteredSuggestions.map((suggestion, index) => (
                                            <motion.div 
                                                key={index} 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ 
                                                    backgroundColor: "#f0f0f0", 
                                                    x: 5, 
                                                    transition: { duration: 0.2 } 
                                                }}
                                                className="flex items-center py-2 md:py-3 hover:bg-gray-100 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0"
                                                onClick={() => handleSelectSuggestion(suggestion)}
                                            >
                                                <IconSearch className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mr-2 md:mr-3" />
                                                <span className="text-[#A7A7A7] text-sm md:text-base font-normal">{suggestion}</span>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="py-2 md:py-3 text-center text-[#A7A7A7] text-sm md:text-base"
                                        >
                                            No results found
                                        </motion.div>
                                    )}
                                </ScrollArea>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}
