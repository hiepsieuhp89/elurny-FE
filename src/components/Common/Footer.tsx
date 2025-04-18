"use client"

import { motion } from "framer-motion"
import { IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from "@tabler/icons-react"

const footerLinks = [
  {
    title: "Product",
    links: ["Platform", "Features", "Dashboard", "Integrations", "Security & Compliance"],
  },
  {
    title: "Solutions",
    links: ["For Enterprises", "For Sales Teams", "For Product Teams", "For Technical Teams", "For Learning Teams"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Help Center", "Product Docs", "Webinars & Events"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Partners", "Press", "Privacy & Terms"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-mainDarkBackgroundV1 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="/" className="flex items-center mb-4">
                <span className="text-mainVioletV1 font-bold text-2xl">e</span>
                <span className="text-mainText font-bold text-2xl">Lurny</span>
              </a>
              <p className="text-secondaryText text-sm mb-6">Transformative Modern Learning for the Digital World</p>
              <div className="flex space-x-4">
                <a href="#" className="text-secondaryText hover:text-mainVioletV1 transition-colors">
                  <IconBrandLinkedin size={20} />
                </a>
                <a href="#" className="text-secondaryText hover:text-mainVioletV1 transition-colors">
                  <IconBrandTwitter size={20} />
                </a>
                <a href="#" className="text-secondaryText hover:text-mainVioletV1 transition-colors">
                  <IconBrandYoutube size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={column.title} className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-mainText mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-secondaryText hover:text-mainVioletV1 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="border-t border-mainCardV1 pt-6 text-center text-secondaryText text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} eLurny. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
