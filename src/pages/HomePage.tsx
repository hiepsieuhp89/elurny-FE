"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { featureCardsData } from "@/mock/mockData"
import { IconPlayerPlayFilled } from "@tabler/icons-react"

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <div className="w-full bg-gradient-to-r from-[#161616] via-[#303030] to-[#161616]">
            <div className="w-full text-center pt-[152px] max-w-[1440px] mx-auto mb-20">
                <h1 className="text-5xl md:text-[94px] leading-[110px] font-semibold bg-gradient-to-b from-[#7A61A5] to-[#C0A18D] text-transparent bg-clip-text mb-[30px]">Upskill . Engage . Grow</h1>
                <p className="font-normal text-2xl text-center text-white mb-[50px]">Lurny KxP is an AI-powered knowledge exchange platform that redefines how modern teams learn—through voice, micro-content, gamification, and multilingual access. It's how today's teams truly engage with knowledge: in moments, not modules.</p>
                <div className="flex justify-center gap-5">
                    <Button variant="default" className="h-[55px] rounded-full py-[15px] px-[30px] text-[20px] font-semibold">Get A Demo</Button>
                    <Button variant="outline" className="h-[55px] rounded-full py-[15px] px-[30px] text-[20px] font-semibold border border-white">Speake To Sales</Button>
                </div>
            </div>
            {/* video section */}
            <div className="max-w-[1440px] mx-auto mb-[150px]">
                <div className="h-[650px] w-full relative rounded-[30px] overflow-hidden">
                    <img
                        draggable={false}
                        src="/images/home/video1.png" alt="video-section" className="w-full h-auto object-contain" />
                    <div className="h-[100px] w-[100px] rounded-full bg-white flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <IconPlayerPlayFilled className="text-mainVioletV1 !h-8 !w-8" />
                    </div>
                </div>
            </div>

            <section className="relative max-w-[1440px] mx-auto mb-[150px]">
                <div className="grid grid-cols-2">
                    <div className="">
                        {isLoading ? (
                            <div className="space-y-4">
                                <Skeleton className="h-12 w-3/4 bg-mainCardV1" />
                                <Skeleton className="h-12 w-1/2 bg-mainCardV1" />
                                <Skeleton className="h-24 w-full bg-mainCardV1" />
                                <div className="flex gap-4 pt-4">
                                    <Skeleton className="h-10 w-32 bg-mainCardV1" />
                                    <Skeleton className="h-10 w-32 bg-mainCardV1" />
                                </div>
                            </div>
                        ) : (
                            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="">
                                <div className="flex flex-col gap-[15px]">
                                    <motion.p className="font-normal text-[22px] text-mainGrayV1" variants={fadeIn}>
                                        KNOWLEDGE EXCHANGE PLATFORM
                                    </motion.p>
                                    <motion.h1 className="text-[45px] font-medium text-white leading-[60px]" variants={fadeIn}>
                                        Lurny KxP: Learning at the speed of need
                                    </motion.h1>
                                    <motion.p className="text-mainGrayV1 text-xl font-normal" variants={fadeIn}>
                                        Lurny KxP is more than a learning platform. It's a dynamic space where knowledge flows—created, shared, and accessed exactly when needed. Unlike static courses, our platform fuels continuous, peer-driven learning through micro-content, AI-powered conversations, and instant access to enterprise knowledge. It's built for busy teams, fast-changing industries, and learners who don't have time to wait.
                                    </motion.p>
                                    <Button
                                        variant="default"
                                        className="
                                        text-[20px] font-semibold
                                        bg-white h-[55px] text-black rounded-full hover:bg-white/90 w-[225px] mt-[15px]">
                                        See How it Works
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="pl-[124px] h-full">
                        <div className="grid grid-cols-2 gap-5 h-full">
                            <img
                                src="/images/home/image1.png"
                                alt="Team collaborating on Lurny platform"
                                className="h-full rounded-[20px]"
                            />
                            <div className="flex flex-col gap-5 h-full">
                                <img
                                    src="/images/home/image2.png"
                                    alt="Team collaborating on Lurny platform"
                                    className="w-full h-auto rounded-[20px] "
                                />
                                <img
                                    src="/images/home/image3.png"
                                    alt="Team collaborating on Lurny platform"
                                    className="w-full h-auto rounded-[20px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <motion.section
                className="max-w-[724px] mx-auto text-center mb-[50px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h1 className="text-[45px] font-medium text-white leading-[60px]">
                    Everything Your Teams Need to Upskill, Engage, and Grow
                </h1>
            </motion.section>
            <section className="relative max-w-[1440px] mx-auto mb-[150px]">
                {/* section 1 */}
                <div className="flex items-stretch gap-[30px] mb-[30px]">
                    <div className="h-[600px] w-[800px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[0].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[0].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                    <div className="h-[600px] w-[610px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[1].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[1].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className="flex items-stretch gap-[30px] mb-[30px]">
                    <div className="h-[600px] w-[610px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[2].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[2].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                    <div className="h-[600px] w-[800px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[3].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[3].image} alt="" className="h-full w-full object-fill" />
                        </div>
                    </div>
                </div>
                {/* section 3 */}
                <div className="flex items-stretch gap-[30px] mb-[30px]">
                    <div className="h-[600px] w-[800px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[4].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[4].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                    <div className="h-[600px] w-[610px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[5].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[5].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                </div>
                {/* section 4 */}
                <div className="flex items-stretch gap-[30px] mb-[30px]">
                    <div className="h-[600px] w-[714px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[6].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[6].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                    <div className="h-[600px] w-[696px] bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 p-[30px] flex flex-col gap-5 hover:bg-mainVioletV1 transition-all duration-300 cursor-pointer">
                        <h2 className="text-white text-[26px] font-medium">{featureCardsData[7].title}</h2>
                        <div className="h-full flex-1 w-full rounded-[20px] overflow-hidden">
                            <img src={featureCardsData[7].image} alt="" className="h-full w-full object-fill" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
