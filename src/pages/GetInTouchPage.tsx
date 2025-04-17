"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { IconMessageCircle, IconMail, IconArrowRight, IconChevronDown, IconMailAi, IconArrowRightBar } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import { additionalOptions, contactOptions, containerVariants, faqItems, itemVariants } from "@/mock/mockData"


export default function GetInTouch() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  return (
    <div className="min-h-screen bg-mainBackgroundV1 text-mainText">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/sample-img.png"
            alt="Lurny Logo"
            className="h-8"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/120x32/9747FF/FFFFFF?text=LURNY"
            }}
          />
          <nav className="hidden md:flex ml-8 space-x-6">
            <div className="relative group">
              <button className="text-mainText hover:text-accentColor transition-colors flex items-center">
                Product <IconChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-mainText hover:text-accentColor transition-colors flex items-center">
                Solutions <IconChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-mainText hover:text-accentColor transition-colors flex items-center">
                Resources <IconChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-mainText hover:text-accentColor transition-colors flex items-center">
                Company <IconChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:block text-mainText hover:text-accentColor transition-colors">
            Pricing
          </a>
          <a href="#" className="hidden md:block text-mainText hover:text-accentColor transition-colors">
            Log in
          </a>
          <Button>Get a Demo</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section className="text-center mb-16" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 className="text-5xl font-bold mb-4" variants={itemVariants}>
            Get in touch
          </motion.h1>
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            Select how you would like to contact us
          </motion.p>
          <motion.div className="flex justify-center space-x-4" variants={itemVariants}>
            <Button>
              <IconMessageCircle size={18} className="mr-2" />
              Live Chat
            </Button>
            <Button>
              <IconMailAi size={18} className="mr-2" />
              Email Us
            </Button>
          </motion.div>
        </motion.section>

        {/* Contact Options */}
        <motion.section
          className="max-w-3xl mx-auto mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-6 rounded-lg bg-mainCardV1">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-10 w-32" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {contactOptions.map((option) => (
                <motion.div
                  key={option.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg bg-mainCardV1"
                  variants={itemVariants}
                >
                  <p className="text-lg mb-4 md:mb-0">
                    <span className="font-bold mr-2">{option.id}.</span> {option.title}
                  </p>
                  {option.buttonVariant === "filled" ? (
                    <Button>{option.buttonText}</Button>
                  ) : (
                    <Button>
                      {option.icon}
                      {option.buttonText}
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* FAQs Section */}
        <motion.section
          className="max-w-3xl mx-auto mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold text-center mb-10" variants={itemVariants}>
            Top FAQs
          </motion.h2>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border-b border-mainCardV1 py-4">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-1" />
                  <Skeleton className="h-4 w-2/3 mt-1" />
                </div>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`} className="border-b border-mainCardV1">
                    <AccordionTrigger className="text-left text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-secondaryText">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          )}
        </motion.section>

        {/* Additional Options */}
        <motion.section className="mb-20" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold text-center mb-10" variants={itemVariants}>
            You can also
          </motion.h2>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-mainCardV1 p-6 rounded-lg">
                  <Skeleton className="h-8 w-8 rounded-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-6" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalOptions.map((option) => (
                <motion.div key={option.id} className="bg-mainCardV1 p-6 rounded-lg" variants={itemVariants}>
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-secondaryText mb-6">{option.description}</p>
                  <Button variant="ghost" className="w-full justify-between group">
                    {option.buttonText}
                    <IconArrowRightBar size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-mainDarkBackgroundV1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/images/sample-img.png"
                alt="Lurny Logo"
                className="h-8 mb-4"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/120x32/9747FF/FFFFFF?text=LURNY"
                }}
              />
              <p className="text-sm text-secondaryText mb-6">Empowering Modern Teams to Learn At the Speed Of Need</p>
              <p className="text-sm font-medium mb-4">Stay Connected</p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondaryText hover:text-mainText">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-secondaryText hover:text-mainText">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-secondaryText hover:text-mainText">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    SkillQuest
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Security & Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    For Enterprises
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    For HR & L&D Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    For Sales Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    For Frontline Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    For Training Providers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Product Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Webinars & Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondaryText hover:text-mainText">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mainCardV1 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0 justify-center md:justify-start">
              <a href="#" className="text-sm text-secondaryText hover:text-mainText">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondaryText hover:text-mainText">
                Terms Of Use
              </a>
              <a href="#" className="text-sm text-secondaryText hover:text-mainText">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-secondaryText hover:text-mainText">
                Sitemap
              </a>
            </div>
            <p className="text-sm text-secondaryText">© 2023 Lurny. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
