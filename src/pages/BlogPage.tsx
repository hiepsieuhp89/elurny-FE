"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronDown,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { blogPosts } from "@/mock/mockData"
import Header from "@/components/Common/Header"
import Footer from "@/components/Common/Footer"


export default function Blog() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 20

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen flex flex-col bg-mainBackgroundV1 text-mainText">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-xl"
                            >
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">Inside eLurny</h1>
                                <p className="text-lg text-secondaryText">
                                    Lurny is more than just an AI-powered learning tool: it's a versatile solution designed to simplify
                                    and enhance productivity for everyone.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="rounded-lg overflow-hidden"
                            >
                                {isLoading ? (
                                    <Skeleton className="w-full aspect-[4/3]" />
                                ) : (
                                    <img
                                        src="/images/sample-img.png"
                                        alt="eLurny team collaboration"
                                        width={600}
                                        height={450}
                                        className="w-full h-auto rounded-lg"
                                    />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Section */}
                <section className="py-12 md:py-16 bg-mainDarkBackgroundV1">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold"
                            >
                                Stories from Inside eLurny
                            </motion.h2>

                            <FilterDropdown />
                        </div>

                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Array(8)
                                    .fill(null)
                                    .map((_, index) => (
                                        <BlogCardSkeleton key={index} />
                                    ))}
                            </div>
                        ) : (
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {blogPosts.map((post) => (
                                    <motion.div key={post.id} variants={item}>
                                        <BlogCard post={post} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="bg-mainCardV1 border-mainCardV1 hover:bg-mainActiveV1/10"
                                >
                                    <IconChevronLeft className="h-4 w-4" />
                                </Button>

                                {[...Array(Math.min(7, totalPages))].map((_, i) => {
                                    let pageNum = i + 1
                                    if (totalPages > 7 && currentPage > 4 && i === 0) {
                                        pageNum = 1
                                    } else if (totalPages > 7 && currentPage > 4 && i === 1) {
                                        return (
                                            <Button key={i} variant="ghost" size="icon" className="w-10 h-10 text-secondaryText" disabled>
                                                ...
                                            </Button>
                                        )
                                    } else if (totalPages > 7 && currentPage > 4 && i > 1) {
                                        pageNum = currentPage + i - 4
                                        if (pageNum > totalPages) return null
                                    }

                                    return (
                                        <Button
                                            key={i}
                                            variant={currentPage === pageNum ? "default" : "outline"}
                                            size="icon"
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={
                                                currentPage === pageNum
                                                    ? "bg-mainActiveV1 hover:bg-mainActiveV1/90 w-10 h-10"
                                                    : "bg-mainCardV1 border-mainCardV1 hover:bg-mainActiveV1/10 w-10 h-10"
                                            }
                                        >
                                            {pageNum}
                                        </Button>
                                    )
                                })}

                                {totalPages > 7 && (
                                    <>
                                        <Button variant="ghost" size="icon" className="w-10 h-10 text-secondaryText" disabled>
                                            ...
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setCurrentPage(totalPages)}
                                            className="bg-mainCardV1 border-mainCardV1 hover:bg-mainActiveV1/10 w-10 h-10"
                                        >
                                            {totalPages}
                                        </Button>
                                    </>
                                )}

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="bg-mainCardV1 border-mainCardV1 hover:bg-mainActiveV1/10"
                                >
                                    <IconChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

// Component for filter dropdown
function FilterDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-mainActiveV1/10 border-mainActiveV1/20 text-mainText hover:bg-mainActiveV1/20"
                >
                    Filter by Type <IconChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-mainCardV1 border-mainCardV1 text-mainText">
                <DropdownMenuItem className="hover:bg-mainActiveV1/10 cursor-pointer">All Types</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-mainActiveV1/10 cursor-pointer">Product</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-mainActiveV1/10 cursor-pointer">Company</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-mainActiveV1/10 cursor-pointer">Case Studies</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

// Blog card component
function BlogCard({ post }: { post: any }) {
    return (
        <motion.div whileHover={{ y: -5 }} className="bg-mainCardV1 rounded-lg overflow-hidden h-full flex flex-col">
            <div className="relative">
                <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute top-3 right-3 bg-mainActiveV1 text-white text-xs font-medium py-1 px-2 rounded">
                    {post.tag}
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                <div className="mt-auto">
                    <p className="text-secondaryText text-sm">{post.team}</p>
                    <div className="flex justify-between items-center mt-2 text-xs text-secondaryText">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// Blog card skeleton for loading state
function BlogCardSkeleton() {
    return (
        <div className="bg-mainCardV1 rounded-lg overflow-hidden h-full flex flex-col">
            <Skeleton className="w-full aspect-video" />
            <div className="p-5 flex flex-col flex-grow">
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <div className="mt-auto">
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <div className="flex justify-between items-center mt-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>
            </div>
        </div>
    )
}
