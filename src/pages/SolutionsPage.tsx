"use client"

import { useState, useEffect } from "react"
import { color, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "@/components/Common/Header"
import Footer from "@/components/Common/Footer"
import LoadingSpinner from "@/components/Common/LoadingSpinner"
import { enterpriseFeatures, featureCards, securityFeatures, teamSections } from "@/mock/mockData"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SolutionsPage() {
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
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {/* Hero Section */}
                    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-mainDarkBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                        Transform Enterprise Learning into On-Demand Knowledge
                                    </h1>
                                    <p className="text-lg md:text-xl text-secondaryText max-w-xl">
                                        AI-powered, multi-lingual platform designed to manage, measure, and deliver learning from anywhere.
                                    </p>
                                    <Button className="bg-mainVioletV1 hover:bg-mainVioletV1/90 text-white px-8 py-6 rounded-md text-lg">
                                        Get Started
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <img
                                        src="/images/sample-img.png"
                                        alt="Enterprise Learning Platform"
                                        className="rounded-lg shadow-xl w-full"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Key Categories Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    <img
                                        src="/images/sample-img.png"
                                        alt="Enterprise Solutions"
                                        className="rounded-lg shadow-lg w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <div className="inline-block px-4 py-1 bg-mainVioletV1/20 text-mainVioletV1 rounded-full text-sm font-medium">
                                        PLATFORM FEATURES & SOLUTIONS
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Built for Enterprises.
                                        <br />
                                        Designed for Learners.
                                    </h2>
                                    <p className="text-secondaryText">
                                        We've built powerful, scalable tools for learning in the enterprise setting for the modern world.
                                    </p>
                                    <ul className="space-y-3">
                                        {enterpriseFeatures.map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-mainVioletV1 mt-1">•</span>
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <Button className="bg-mainVioletV1 hover:bg-mainVioletV1/90 text-white px-6 py-2 rounded-md">
                                        See More Features
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Smart Features Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16 max-w-3xl mx-auto"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features That Scale With Your Enterprise</h2>
                                <p className="text-secondaryText">
                                    From sophisticated analytics to AI-powered learning pathways and in-depth support, Lurny is packed
                                    with features that make enterprise learning more personalized, efficient and scalable without
                                    overwhelming your team or your learners.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {featureCards.map((card, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="bg-mainCardV1 border-none h-full">
                                            <CardHeader className="pb-2">
                                                <div className={`w-12 h-12 rounded-md flex items-center justify-center ${color}`}>
                                                    <span className="text-mainVioletV1">{card.icon}</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                                <p className="text-secondaryText">{card.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainDarkBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <div className="inline-block px-4 py-1 bg-mainVioletV1/20 text-mainVioletV1 rounded-full text-sm font-medium">
                                        SECURITY
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold">Security by Design. Privacy by Default.</h2>
                                    <p className="text-secondaryText">Enterprise-grade security and data protection.</p>
                                    <ul className="space-y-4">
                                        {securityFeatures.map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-mainVioletV1 mt-1">{feature.icon}</span>
                                                <span>{feature.text}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img src="/images/sample-img.png" alt="Security Features" className="rounded-lg shadow-xl w-full" />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Teams Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-16 max-w-3xl"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Built for every team...
                                    <br />
                                    everywhere.
                                </h2>
                                <p className="text-secondaryText">
                                    From deskless workers to sales reps to L&D teams, Lurny has solutions to help your people learn, where
                                    they work, and whatever they need to grow.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                {teamSections.map((section, index) => (

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
                                    >
                                        <div className="lg:col-span-2">
                                            <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                                            <p className="text-secondaryText mb-4">{section.description}</p>
                                            <a href={section.learnMoreLink} className="text-mainVioletV1 hover:text-mainVioletV1/80 inline-flex items-center">
                                                Learn More
                                            </a>
                                        </div>
                                        <div className="order-first lg:order-last">
                                            <img src="/images/sample-img.png" alt={section.title} className="rounded-lg shadow-lg w-full h-48 object-cover" />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-12 text-center"
                            >
                                <Button className="bg-mainVioletV1 hover:bg-mainVioletV1/90 text-white px-8 py-3 rounded-md">
                                    See All Solutions
                                </Button>
                            </motion.div>
                        </div>
                    </section>

                    {/* Future of Learning Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainDarkBackgroundV1">
                        <div className="container mx-auto max-w-7xl">
                            <div className="relative rounded-xl overflow-hidden">
                                <img src="/images/sample-img.png" alt="Future of Learning" className="w-full h-[300px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-mainDarkBackgroundV1/90 to-mainDarkBackgroundV1/60 flex items-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="px-8 md:px-16 space-y-6 max-w-2xl"
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold">The Future of Learning is here</h2>
                                        <p className="text-secondaryText">Experience how modern learning transforms your team</p>
                                        <Button className="bg-white hover:bg-gray-100 text-mainDarkBackgroundV1 px-6 py-2 rounded-md">
                                            Book a Demo Today
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mainBackgroundV1">
                        <div className="container mx-auto max-w-7xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    <span className="text-mainVioletV1">Ready to talk?</span>
                                    <br />
                                    <span className="text-accentColor">Get in touch.</span>
                                </h2>
                                <div>
                                    <Button className="bg-white hover:bg-gray-100 text-mainDarkBackgroundV1 px-8 py-3 rounded-full">
                                        Request a Demo
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}
