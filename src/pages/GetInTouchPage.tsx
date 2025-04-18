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
    </div>
  )
}
