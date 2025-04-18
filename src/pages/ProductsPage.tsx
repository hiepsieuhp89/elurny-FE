"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    IconArrowRight,
    IconRobot,
    IconUsers,
    IconBulb,
    IconSettings,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Common/Header"
import LoadingSpinner from "@/components/Common/LoadingSpinner"
import Footer from "@/components/Common/Footer"
const platformFeatures = [
    { id: "core", label: "Core Engine" },
    { id: "engagement", label: "Engagement" },
    { id: "enterprise", label: "Enterprise Tools" },
    { id: "add-ons", label: "Add-Ons & Plugins" },
]

const featureCards = [
    {
        title: "MULTILINGUAL ENGINE",
        description:
            "Create microlessons in minutes using text, PDFs, webpages, or even handwritten notes. Automatically generate comprehension and long-term retention tests.",
        image: "/images/sample-img.png",
    },
    {
        title: "VIDEO-PPT PROGRAM GENERATOR",
        description:
            "Convert content into instructional videos, products, or slides in under 3 minutes—no editing or video skills required.",
        image: "/images/sample-img.png",
    },
    {
        title: "MULTILINGUAL AI COACH",
        description:
            "Learners talk to AI coaches in their language and receive personalized guidance, feedback, and challenges.",
        image: "/images/sample-img.png",
    },
]

const whyLurnyWorks = [
    {
        icon: <IconUsers className="text-mainVioletV1" size={32} />,
        title: "Built for the way people actually learn",
        description:
            "We combine cognitive science, neuroscience, and learning theory to create learning experiences and tools that work.",
    },
    {
        icon: <IconBulb className="text-mainVioletV1" size={32} />,
        title: "Engagement That Feels Natural",
        description:
            "Learning feels natural because we design for how people actually think, making progress effortless while tracking what matters.",
    },
    {
        icon: <IconRobot className="text-mainVioletV1" size={32} />,
        title: "AI at the Core",
        description:
            "From auto-generating content to personalized learning paths, everything is powered by advanced machine learning trained on decades of learning science.",
    },
    {
        icon: <IconSettings className="text-mainVioletV1" size={32} />,
        title: "Instant ROI Through Knowledge Capture",
        description:
            "We capture tacit knowledge, transform it into learning experiences, and measure impact with analytics that matter.",
    },
]

const targetAudiences = [
    {
        title: "Enterprises",
        description:
            "Upskill at scale with customized learning journeys personalized for every employee, reduce knowledge gaps, and drive measurable business outcomes.",
        image: "/images/sample-img.png",
    },
    {
        title: "Training & Consulting Firms",
        description:
            "Deliver Scalable Knowledge Programs To Clients. Launch White Label Academies And Drive Recurring Revenue.",
        image: "/images/sample-img.png",
    },
    {
        title: "HR & L&D Teams",
        description:
            "Replace Content Fatigue With Gamified Learning, Personalized Coaching, And Measurable Skill Growth That Employees Actually Enjoy.",
        image: "/images/sample-img.png",
    },
]

export default function Product() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <ProductSkeleton />
    }

    return (
        <div className="flex min-h-screen flex-col bg-mainBackgroundV1 text-mainText">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-mainDarkBackgroundV1 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                Every<span className="text-mainVioletV1">thing</span> Learning
                            </h1>
                            <p className="mb-8 text-lg text-secondaryText md:text-xl">
                                Lurny KAP is a next-generation, AI-powered, personalized, and multilingual—delivering learning that's
                                instant, intelligent, and impossible to ignore.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button className="w-full bg-mainVioletV1 hover:bg-mainVioletV1/90 sm:w-auto">Get Started</Button>
                                <Button variant="outline" className="w-full border-mainCardV1 hover:bg-mainCardV1/30 sm:w-auto">
                                    Watch a Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* What's Inside the Platform */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mb-12 max-w-3xl text-center"
                        >
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What's Inside the Platform</h2>
                            <p className="text-secondaryText">
                                Explore the full stack of AI-powered learning capabilities—organized to help you deliver better
                                outcomes, faster.
                            </p>
                        </motion.div>

                        <Tabs defaultValue="core" className="mx-auto max-w-5xl">
                            <TabsList className="mb-8 grid w-full grid-cols-2 bg-mainCardV1 md:grid-cols-4">
                                {platformFeatures.map((feature) => (
                                    <TabsTrigger
                                        key={feature.id}
                                        value={feature.id}
                                        className="data-[state=active]:bg-mainVioletV1 data-[state=active]:text-white"
                                    >
                                        {feature.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {platformFeatures.map((feature) => (
                                <TabsContent key={feature.id} value={feature.id} className="mt-0">
                                    <div className="grid gap-6 md:grid-cols-3">
                                        {featureCards.map((card, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                            >
                                                <Card className="overflow-hidden bg-mainVioletV1/20 transition-all hover:bg-mainVioletV1/30">
                                                    <CardContent className="p-0">
                                                        <div className="p-6">
                                                            <Badge className="mb-4 bg-mainVioletV1 text-xs font-semibold uppercase">
                                                                {card.title}
                                                            </Badge>
                                                            <p className="mb-6 text-sm">{card.description}</p>
                                                        </div>
                                                        <div className="relative h-64 w-full overflow-hidden">
                                                            <img
                                                                src={card.image || "/placeholder.svg"}
                                                                alt={card.title}
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </section>

                {/* Why Lurny Works */}
                <section className="bg-mainDarkBackgroundV1 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mb-12 max-w-3xl text-center"
                        >
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Lurny Works When Others Don't</h2>
                            <p className="text-secondaryText">
                                Lurny KAP is not just LXP with better UI. It's a reimagined way of learning—designed for busy teams,
                                continuous learning, and tacit knowledge exchange. Here's why it delivers results.
                            </p>
                        </motion.div>

                        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {whyLurnyWorks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="rounded-lg bg-mainCardV1 p-6"
                                >
                                    <div className="mb-4">{item.icon}</div>
                                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-secondaryText">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Built for every team */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-12 md:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col justify-center"
                            >
                                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                    Built for every
                                    <br />
                                    team...
                                    <br />
                                    everywhere.
                                </h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col justify-center"
                            >
                                <p className="text-lg text-secondaryText">
                                    From desktop workers to sales reps to L&D teams—Lurny helps adapt to how your people learn, where they
                                    work, and what they need to grow.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-16 space-y-12">
                            {targetAudiences.map((audience, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="grid gap-6 md:grid-cols-2"
                                >
                                    <div className="order-2 flex flex-col justify-center md:order-1">
                                        <h3 className="mb-4 text-2xl font-bold">{audience.title}</h3>
                                        <p className="mb-6 text-secondaryText">{audience.description}</p>
                                        <a href="#" className="flex items-center text-sm font-medium text-accentColor hover:underline">
                                            Learn More
                                            <IconArrowRight size={16} className="ml-2" />
                                        </a>
                                    </div>
                                    <div className="order-1 md:order-2">
                                        <div className="relative h-64 w-full overflow-hidden rounded-lg">
                                            <img
                                                src={audience.image || "/placeholder.svg"}
                                                alt={audience.title}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button className="bg-mainVioletV1 hover:bg-mainVioletV1/90">See All Solutions</Button>
                        </div>
                    </div>
                </section>

                {/* Future of Learning */}
                <section className="relative py-24">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/sample-img.png" alt="Future of Learning" className="object-cover opacity-40" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Future of Learning is here</h2>
                            <p className="mb-8 text-lg">Experience how modern teams learn, adapt, and grow together.</p>
                            <Button className="bg-white text-mainDarkBackgroundV1 hover:bg-white/90">Schedule a Demo</Button>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-mainDarkBackgroundV1 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-2 text-3xl font-bold text-mainVioletV1 md:text-4xl">Ready to talk?</h2>
                            <h3 className="mb-8 text-3xl font-bold text-accentColor md:text-4xl">Get in touch.</h3>
                            <Button className="bg-white text-mainDarkBackgroundV1 hover:bg-white/90">Request a Demo</Button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function ProductSkeleton() {
    return (
        <div className="flex min-h-screen flex-col bg-mainBackgroundV1 text-mainText">
            {/* Header Skeleton */}
            <header className="border-b border-mainCardV1/50 bg-mainDarkBackgroundV1">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-8">
                        <Skeleton className="h-8 w-24 bg-mainCardV1" />
                        <div className="hidden space-x-6 md:flex">
                            {[1, 2, 3, 4].map((i) => (
                                <Skeleton key={i} className="h-4 w-20 bg-mainCardV1" />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-4 w-12 bg-mainCardV1" />
                        <Skeleton className="h-9 w-24 bg-mainCardV1" />
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section Skeleton */}
                <section className="bg-mainDarkBackgroundV1 py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <Skeleton className="mx-auto mb-6 h-12 w-3/4 bg-mainCardV1" />
                            <Skeleton className="mx-auto mb-8 h-20 w-full bg-mainCardV1" />
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Skeleton className="h-10 w-full sm:w-32 bg-mainCardV1" />
                                <Skeleton className="h-10 w-full sm:w-32 bg-mainCardV1" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loading Spinner */}
                <div className="flex items-center justify-center py-20">
                    <LoadingSpinner />
                </div>
            </main>
        </div>
    )
}
