"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/Common/Header"
import Footer from "@/components/Common/Footer"
import CapabilitiesDropdown from "@/components/Common/CapabilitiesDropdown"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { IconArrowRight} from "@tabler/icons-react"
import { EnterpriseSection } from "@/components/HomePage/EnterpriseSection"
import { FeatureCard } from "@/components/HomePage/FeatureCard"
import { capabilitiesData, enterpriseData, featureCardsData } from "@/components/HomePage/mockData"

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

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="min-h-screen bg-mainBackgroundV1 text-mainText">
            <Header />
            <section className="relative pt-16 pb-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="w-full lg:w-1/2">
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
                                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                                    <CapabilitiesDropdown data={capabilitiesData} />

                                    <div className="pt-8">
                                        <motion.h1 className="text-4xl md:text-5xl font-bold mb-2" variants={fadeIn}>
                                            Lurny KXP:
                                        </motion.h1>
                                        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeIn}>
                                            LEARNING AT THE SPEED OF NEED
                                        </motion.h2>
                                        <motion.p className="text-secondaryText mb-8 max-w-xl" variants={fadeIn}>
                                            Lurny is the Modern Way of Learning: Designed for Enterprises, Built for Employees. Create
                                            Engaging, Interactive, Bite-Sized Micro-Learning Modules Seamlessly. Drag-and-Drop Course
                                            Creation, Instant Assessments, and Instant Access To Employee Knowledge. All Built For Every
                                            Device, Fast Changing Industries, and Learners Who Want To Learn On-The-Go.
                                        </motion.p>

                                        <div className="flex flex-wrap gap-4">
                                            <Button className="bg-mainActiveV1 hover:bg-mainActiveV1/90 text-white">
                                                Get Started <IconArrowRight className="ml-2" size={16} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="border-mainActiveV1 text-mainActiveV1 hover:bg-mainActiveV1/10"
                                            >
                                                Schedule a Demo
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="w-full lg:w-1/2">
                            {isLoading ? (
                                <Skeleton className="h-80 w-full rounded-xl bg-mainCardV1" />
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/images/sample-img.png"
                                        alt="Team collaborating on Lurny platform"
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <motion.section
                className="py-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything Your Teams Need To <br />
                        Upskill, Engage, And Grow
                    </h2>
                </div>
            </motion.section>
            <section className="py-8 pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {isLoading
                            ? Array(8)
                                .fill(0)
                                .map((_, index) => <Skeleton key={index} className="h-80 w-full rounded-xl bg-mainCardV1" />)
                            : featureCardsData.map((card) => (
                                <FeatureCard key={card.id} title={card.title} description={card.description} image={card.image} />
                            ))}
                    </motion.div>
                </div>
            </section>
            <EnterpriseSection data={enterpriseData} isLoading={isLoading} />
            <Footer />
        </div>
    )
}





