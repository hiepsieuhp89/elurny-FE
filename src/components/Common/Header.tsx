import { Button } from "../ui/button"
import { IconBrain, IconBulb, IconCertificate, IconChartBar, IconChevronDown, IconDeviceAnalytics, IconFileAnalytics, IconUsers } from "@tabler/icons-react";
import { motion } from "framer-motion";

const navigationItems = [
    {
        label: "Product",
        items: [
            { label: "Core Capabilities", icon: <IconBrain size={20} /> },
            { label: "Engagement & Analytics", icon: <IconChartBar size={20} /> },
        ],
    },
    {
        label: "Solutions",
        items: [
            { label: "For Enterprises", icon: <IconUsers size={20} /> },
            { label: "For L&D Teams", icon: <IconCertificate size={20} /> },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", icon: <IconFileAnalytics size={20} /> },
            { label: "Case Studies", icon: <IconDeviceAnalytics size={20} /> },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About Us", icon: <IconUsers size={20} /> },
            { label: "Careers", icon: <IconBulb size={20} /> },
        ],
    },
]


interface NavDropdownItem {
    label: string
    icon: React.ReactNode
}

interface NavDropdownProps {
    items: NavDropdownItem[]
}
export default function Header() {
    return (
      <header className="w-full border-b-[4px] border-b-mainBorderV1">
          <div className="sticky flex justify-between items-center top-0 z-50  border-mainCardV1/50 bg-mainDarkBackgroundV1 h-[100px] py-10 max-w-[1440px] mx-auto">
           <div className="flex items-center gap-[50px]">
           <div className="w-[206px] h-[30px] flex-shrink-0 relative">
                <img draggable={false} src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
            </div>

            <nav className="hidden md:flex">
                <ul className="flex space-x-[30px]">
                    {navigationItems.map((item) => (
                        <li key={item.label} className="relative group">
                            <button className="flex items-center gap-[5px] py-2 text-lg font-normal text-white hover:text-mainYellowV1">
                                {item.label}
                                <IconChevronDown size={16} />
                            </button>
                            <NavDropdown items={item.items} />
                        </li>
                    ))}
                </ul>
            </nav>
           </div>
            <div className="flex items-center gap-10">
                <a href="/blog" className="text-lg font-normal text-white hover:text-mainYellowV1">
                    Pricing
                </a>
                <a href="/login" className="text-lg font-normal text-white hover:text-mainYellowV1">
                    Log In
                </a>
                <Button size="md" variant="default" className="px-5">Get Started</Button>
            </div>
        </div>
      </header>
    )
}

function NavDropdown({ items }: NavDropdownProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-1 hidden min-w-[200px] rounded-md border border-mainCardV1 bg-mainDarkBackgroundV1 p-2 shadow-lg group-hover:block"
        >
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.label}>
                        <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-mainCardV1">
                            {item.icon}
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
