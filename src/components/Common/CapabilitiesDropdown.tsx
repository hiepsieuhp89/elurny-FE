"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
}

interface Category {
  id: string
  name: string
}

interface CapabilitiesDropdownProps {
  data: {
    categories: Category[]
    features: Feature[]
  }
}

export default function CapabilitiesDropdown({ data }: CapabilitiesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(data.categories[0].id)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const filteredFeatures = data.features.filter((feature) => feature.category === activeCategory)

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={toggleDropdown}
        className="border-mainCardV1 bg-mainCardV1 text-mainText hover:bg-mainDarkBackgroundV1 w-full md:w-auto justify-between"
      >
        <span>Our Capabilities</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-mainCardV1 rounded-lg shadow-xl z-50 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="bg-mainDarkBackgroundV1 mb-4">
                  {data.categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-mainActiveV1 data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={activeCategory} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredFeatures.map((feature) => (
                      <motion.div
                        key={feature.id}
                        className="p-4 rounded-lg bg-mainDarkBackgroundV1 hover:bg-mainDarkBackgroundV1/80 transition-colors"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">{feature.icon}</div>
                          <div>
                            <h3 className="font-medium mb-1">{feature.title}</h3>
                            <p className="text-secondaryText text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
