"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconBrandTiktok,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { heroData, innovationData, journeyData, knowUsData, numberData, peopleData, socialImages, storyCards, valuesData } from "@/mock/mockData"


const AboutUs = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const fadeInUp = {
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
        <div className="bg-mainBackgroundV1 text-mainText min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-12 w-3/4 mx-auto bg-mainCardV1" />
                        <Skeleton className="h-24 w-full mx-auto bg-mainCardV1" />
                    </div>
                ) : (
                    <motion.div className="text-center max-w-3xl mx-auto" initial="hidden" animate="visible" variants={fadeInUp}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroData.title}</h1>
                        <p className="text-lg text-secondaryText">{heroData.description}</p>
                    </motion.div>
                )}
            </section>

            {/* People Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        <Skeleton className="h-80 w-full bg-mainCardV1" />
                        <div className="space-y-4">
                            <Skeleton className="h-10 w-3/4 bg-mainCardV1" />
                            <Skeleton className="h-40 w-full bg-mainCardV1" />
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <img src="/images/sample-img.png" alt="Team collaboration" className="rounded-lg w-full h-auto" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h2 className="text-3xl font-bold">{peopleData.title}</h2>
                            <p className="text-secondaryText">{peopleData.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Journey Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <Skeleton className="h-40 w-full bg-mainCardV1" />
                        </div>
                        <Skeleton className="h-80 w-full bg-mainCardV1" />
                    </div>
                ) : (
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="order-2 md:order-1">
                            <p className="text-secondaryText">{journeyData.description}</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="order-1 md:order-2">
                            <img src="/images/sample-img.png" alt="Team journey" className="rounded-lg w-full h-auto" />
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Innovation Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        <Skeleton className="h-80 w-full bg-mainCardV1" />
                        <div className="space-y-4">
                            <Skeleton className="h-40 w-full bg-mainCardV1" />
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <img src="/images/sample-img.png" alt="Innovation" className="rounded-lg w-full h-auto" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <p className="text-secondaryText">{innovationData.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Our Story Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-8">
                        <Skeleton className="h-10 w-48 mx-auto bg-mainCardV1" />
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-64 w-full bg-mainCardV1" />
                            ))}
                        </div>
                    </div>
                ) : (
                    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center">
                            Our story
                        </motion.h2>
                        <div className="relative">
                            <motion.div className="grid md:grid-cols-3 gap-6 overflow-hidden" variants={staggerContainer}>
                                {storyCards.map((card) => (
                                    <motion.div key={card.id} variants={fadeInUp} className="bg-mainCardV1 p-6 rounded-lg">
                                        <div className="text-3xl mb-4">{card.icon}</div>
                                        <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                                        <p className="text-secondaryText mb-4">{card.description}</p>
                                        <Button variant="link" className="text-mainActiveV1 p-0">
                                            {card.link}
                                        </Button>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-mainCardV1 p-2 rounded-full hidden md:block">
                                <IconChevronLeft size={24} />
                            </button>
                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-mainCardV1 p-2 rounded-full hidden md:block">
                                <IconChevronRight size={24} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </section>

            {/* By the Numbers Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <Skeleton className="h-64 w-full bg-mainActiveV1 rounded-lg" />
                ) : (
                    <motion.div
                        className="bg-mainActiveV1 rounded-lg p-8 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold mb-8">monday.com by the numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {numberData.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="text-4xl font-bold">{item.number}</div>
                                    <div className="text-sm">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </section>

            {/* Culture and Values Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-8">
                        <Skeleton className="h-10 w-64 mx-auto bg-mainCardV1" />
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Skeleton key={i} className="h-64 w-full bg-mainCardV1" />
                            ))}
                        </div>
                    </div>
                ) : (
                    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center">
                            Our culture and values
                        </motion.h2>
                        <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
                            {valuesData.map((value) => (
                                <motion.div key={value.id} variants={fadeInUp} className="bg-mainCardV1 p-6 rounded-lg">
                                    <div className="text-3xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-secondaryText">{value.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Impact Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <Skeleton className="h-64 w-full bg-mainActiveV1 rounded-lg" />
                ) : (
                    <motion.div
                        className="bg-mainActiveV1 rounded-lg p-8 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Together we can impact <span className="font-normal">how teams work across the globe</span>
                        </h2>
                        <Button className="bg-white text-mainActiveV1 hover:bg-gray-100 mt-4">Join our team</Button>
                    </motion.div>
                )}
            </section>

            {/* Get to Know Us Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-8">
                        <Skeleton className="h-10 w-64 mx-auto bg-mainCardV1" />
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-64 w-full bg-mainCardV1" />
                            ))}
                        </div>
                    </div>
                ) : (
                    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center">
                            Get to know us better
                        </motion.h2>
                        <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
                            {knowUsData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={fadeInUp}
                                    className="bg-mainDarkBackgroundV1 border border-mainCardV1 p-6 rounded-lg"
                                >
                                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <h4 className="text-lg font-medium mb-3">{item.subtitle}</h4>
                                    <p className="text-secondaryText">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Social Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                {loading ? (
                    <div className="space-y-8">
                        <Skeleton className="h-10 w-48 mx-auto bg-mainCardV1" />
                        <div className="flex justify-center gap-4 mb-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Skeleton key={i} className="h-8 w-8 rounded-full bg-mainCardV1" />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Skeleton key={i} className="h-40 w-full bg-mainCardV1" />
                            ))}
                        </div>
                    </div>
                ) : (
                    <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center">
                            Let's get social
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-6">
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandFacebook size={24} />
                            </a>
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandTwitter size={24} />
                            </a>
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandInstagram size={24} />
                            </a>
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandLinkedin size={24} />
                            </a>
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandYoutube size={24} />
                            </a>
                            <a href="#" className="text-secondaryText hover:text-mainText">
                                <IconBrandTiktok size={24} />
                            </a>
                        </motion.div>
                        <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-4" variants={staggerContainer}>
                            {socialImages.map((image, index) => (
                                <motion.div key={index} variants={fadeInUp} className="relative group">
                                    <img
                                        src={image || "/placeholder.svg"}
                                        alt={`Social media ${index + 1}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-mainActiveV1 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <IconBrandInstagram size={24} />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Final CTA Section */}
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-mainActiveV1">
                {loading ? (
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <Skeleton className="h-10 w-3/4 bg-purple-800" />
                            <Skeleton className="h-10 w-1/2 bg-purple-800" />
                            <Skeleton className="h-10 w-32 bg-purple-800" />
                        </div>
                        <Skeleton className="h-64 w-full bg-purple-800 rounded-lg" />
                    </div>
                ) : (
                    <motion.div
                        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h2 className="text-3xl font-bold">
                                Empowering teams to <br />
                                accomplish more, together
                            </h2>
                            <p className="text-white opacity-80">Join the thousands of teams already using lurny.com</p>
                            <Button className="bg-white text-mainActiveV1 hover:bg-gray-100">Join our team</Button>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <img src="/images/sample-img.png" alt="Team collaboration" className="rounded-lg w-full h-auto" />
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 md:px-8 lg:px-16 bg-mainDarkBackgroundV1">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="space-y-8">
                            <div className="grid md:grid-cols-6 gap-8">
                                <Skeleton className="h-8 w-32 bg-mainCardV1" />
                                <div className="space-y-4 col-span-5">
                                    <div className="grid md:grid-cols-5 gap-8">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="space-y-2">
                                                <Skeleton className="h-6 w-24 bg-mainCardV1" />
                                                <Skeleton className="h-4 w-20 bg-mainCardV1" />
                                                <Skeleton className="h-4 w-20 bg-mainCardV1" />
                                                <Skeleton className="h-4 w-20 bg-mainCardV1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Skeleton className="h-6 w-full bg-mainCardV1" />
                            <div className="flex gap-4 justify-center">
                                {[1, 2, 3].map((i) => (
                                    <Skeleton key={i} className="h-8 w-8 rounded-full bg-mainCardV1" />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
                            <motion.div variants={fadeInUp} className="grid md:grid-cols-6 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">lurny</h3>
                                    <p className="text-sm text-secondaryText">Work management platform for teams</p>
                                </div>
                                <div className="col-span-5 grid md:grid-cols-5 gap-8">
                                    <div>
                                        <h4 className="font-medium mb-4">Product</h4>
                                        <ul className="space-y-2 text-sm text-secondaryText">
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Features
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Integrations
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Enterprise
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Solutions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-4">Team</h4>
                                        <ul className="space-y-2 text-sm text-secondaryText">
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Careers
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-4">Resources</h4>
                                        <ul className="space-y-2 text-sm text-secondaryText">
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Community
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Help Center
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Webinars
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-4">Company</h4>
                                        <ul className="space-y-2 text-sm text-secondaryText">
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Security
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Status
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-4">From our blog</h4>
                                        <ul className="space-y-2 text-sm text-secondaryText">
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Latest Articles
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Case Studies
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Whitepapers
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-mainText">
                                                    Resources & Events
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className="border-t border-mainCardV1 pt-8 text-center text-sm text-secondaryText"
                            >
                                <p>© 2023 lurny.com Inc. All rights reserved.</p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
                                <a href="#" className="text-secondaryText hover:text-mainText">
                                    <IconBrandFacebook size={20} />
                                </a>
                                <a href="#" className="text-secondaryText hover:text-mainText">
                                    <IconBrandTwitter size={20} />
                                </a>
                                <a href="#" className="text-secondaryText hover:text-mainText">
                                    <IconBrandLinkedin size={20} />
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </footer>
        </div>
    )
}

export default AboutUs
