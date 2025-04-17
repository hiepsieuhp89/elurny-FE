import { useState } from "react"
import {
    IconChevronRight,
    IconDotsVertical,
    IconMenu2,
    IconX,
} from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/Common/CustomSelect"
import ContributionGraph from "@/components/MyBoxPage/ContributionGraph"
import { latestLurnies } from "@/mock/mockData"

type NavItemProps = {
    icon: string
    label: string
    count: number
    active?: boolean
    onClick: () => void
}

export default function MyBoxPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("Achievements")
    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            <button 
                className="md:hidden fixed top-[10px] left-[10px] z-30 p-2 bg-mainColorV1 rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? (
                    <IconX size={18} className="text-white" />
                ) : (
                    <IconMenu2 size={18} className="text-white" />
                )}
            </button>

            <div className={`${mobileMenuOpen ? 'fixed inset-0 z-20' : 'hidden'} md:relative md:block md:w-[350px] px-[15px] md:px-6 py-[40px] md:py-[50px] flex flex-col bg-backgroundColorV1 overflow-y-auto`}>
                {/* User Profile */}
                <div className="p-0 py-[15px] md:p-6 flex flex-col items-start mt-0">
                    <div className="relative w-[100px] md:w-[120px] h-[100px] md:h-[120px] mb-3 md:mb-5 rounded-[10px] overflow-hidden">
                        <img
                            className="h-full w-full object-cover"
                            src="/images/sample-img.png" alt="Aaush Raj" width={200} height={200} />
                    </div>
                    <div className="flex flex-col gap-[8px] md:gap-[10px]">
                        <h2 className="text-white text-xl md:text-[22px] font-semibold">Aaush Raj</h2>
                        <p className="text-white text-sm md:text-base">VP-Engineering</p>
                        <p className="text-white text-xs md:text-sm">Lurnifying Since Jan 2025</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 mt-3 md:mt-4 flex flex-col gap-[12px] md:gap-[15px]">
                    <NavItem 
                        icon="/images/my-box/icon1.png" 
                        label="All Lurnies" 
                        count={564} 
                        active={activeSection === "All Lurnies"}
                        onClick={() => {
                          setActiveSection("All Lurnies")
                          setMobileMenuOpen(false)
                        }}
                    />
                    <NavItem 
                        icon="/images/my-box/icon2.png" 
                        label="Saved Lurnies" 
                        count={564} 
                        active={activeSection === "Saved Lurnies"}
                        onClick={() => {
                          setActiveSection("Saved Lurnies")
                          setMobileMenuOpen(false)
                        }}
                    />
                    <NavItem 
                        icon="/images/my-box/icon3.png" 
                        label="Collections" 
                        count={564} 
                        active={activeSection === "Collections"}
                        onClick={() => {
                          setActiveSection("Collections")
                          setMobileMenuOpen(false)
                        }}
                    />
                    <NavItem 
                        icon="/images/my-box/icon4.png" 
                        label="Channels" 
                        count={564} 
                        active={activeSection === "Channels"}
                        onClick={() => {
                          setActiveSection("Channels")
                          setMobileMenuOpen(false)
                        }}
                    />
                    <NavItem 
                        icon="/images/my-box/icon5.png" 
                        label="Subscriptions" 
                        count={564} 
                        active={activeSection === "Subscriptions"}
                        onClick={() => {
                          setActiveSection("Subscriptions")
                          setMobileMenuOpen(false)
                        }}
                    />
                    <NavItem 
                        icon="/images/my-box/icon6.png" 
                        label="Achievements" 
                        count={564} 
                        active={activeSection === "Achievements"}
                        onClick={() => {
                          setActiveSection("Achievements")
                          setMobileMenuOpen(false)
                        }}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-[15px] md:p-[30px] pt-[60px] md:pt-[30px] overflow-y-auto bg-backgroundDarkColorV1">
                <h1 className="text-white text-2xl md:text-4xl font-semibold mb-3 md:mb-5">{activeSection}</h1>
                
                {activeSection === "Achievements" && (
                  <>
                    {/* Achievements Badges */}
                    <div className="rounded-[10px] p-3 md:p-5 mb-[15px] md:mb-[30px] border border-white/20 bg-gradient-to-r from-[#2A2A2B] to-[#2C2C2C] flex items-center gap-[10px] md:gap-[35px] overflow-x-auto">
                        <div className="relative w-[35px] md:w-[62px] h-[55px] md:h-[90px] flex-shrink-0">
                            <img
                                draggable={false}
                                src="/images/my-box/achie1.png" alt="achie1" className="w-full h-full object-contain" />
                        </div>
                        <div className="relative w-[35px] md:w-[62px] h-[55px] md:h-[90px] flex-shrink-0">
                            <img
                                draggable={false}
                                src="/images/my-box/achie2.png" alt="achie1" className="w-full h-full object-contain" />
                        </div>
                        <div className="relative w-[35px] md:w-[62px] h-[55px] md:h-[90px] flex-shrink-0">
                            <img
                                draggable={false}
                                src="/images/my-box/achie3.png" alt="achie1" className="w-full h-full object-contain" />
                        </div>
                        <div className="relative w-[35px] md:w-[62px] h-[55px] md:h-[90px] flex-shrink-0">
                            <img
                                draggable={false}
                                src="/images/my-box/achie4.png" alt="achie1" className="w-full h-full object-contain" />
                        </div>
                        <div className="relative w-[35px] md:w-[62px] h-[55px] md:h-[90px] flex-shrink-0">
                            <img
                                draggable={false}
                                src="/images/my-box/achie5.png" alt="achie1" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    {/* Lurnies Completed */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 md:gap-0">
                            <h2 className="text-white text-xl md:text-4xl font-semibold">293 Lurnies Completed In 2025</h2>
                            <Select>
                                <SelectTrigger className="w-[100px] md:w-[116px] bg-cardColorV1 text-white border-none mt-2 md:mt-0">2025</SelectTrigger>
                                <SelectContent className="w-[100px] md:w-[116px]" align="end">
                                    <SelectItem value="2025">2025</SelectItem>
                                    <SelectItem value="2024">2024</SelectItem>
                                    <SelectItem value="2023">2023</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Activity Calendar */}
                    <div className="overflow-x-auto -mx-[15px] md:mx-0 px-[10px] md:px-0 py-2">
                        <ContributionGraph />
                    </div>
                  </>
                )}
                
                {(activeSection === "Achievements" || activeSection === "All Lurnies" || activeSection === "Saved Lurnies") && (
                  <>
                    <h2 className="text-white text-xl md:text-4xl font-semibold mt-[15px] md:mt-[30px] mb-3 md:mb-5">
                      {activeSection === "Achievements" ? "Latest Lurnies" : 
                       activeSection === "All Lurnies" ? "Your Lurnies" : 
                       "Saved Lurnies"}
                    </h2>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 rounded-[10px] p-3 md:p-5 bg-[#1E1E1E] mb-[100px] md:mb-0"
                    >
                        {latestLurnies.map((lurnie) => (
                            <div key={lurnie.id} className="rounded-[10px] overflow-hidden " style={{ backgroundColor: "#424242" }}>
                                <div className="relative h-[90px] md:h-[106px] w-full">
                                    <img
                                        src={"/images/sample-img.png"}
                                        alt={lurnie.title}
                                        height={200}
                                        width={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col p-[8px] md:p-[10px]">
                                    <div className="flex items-center justify-between mb-[8px] md:mb-[10px]">
                                        <span className="text-white text-[10px] md:text-xs">{lurnie.timeAgo}</span>
                                        <button
                                            className="w-4 h-4 md:w-5 md:h-5 bg-mainColorV1 rounded-full flex items-center justify-center"
                                        >
                                            <IconDotsVertical size={8} className="text-white md:hidden" />
                                            <IconDotsVertical size={10} className="text-white hidden md:block" />
                                        </button>
                                    </div>
                                    <h3 className="text-white text-[10px] md:text-xs font-bold mb-4 md:mb-6">{lurnie.title}</h3>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-1 md:space-x-2">
                                            <span className="text-gray-400 text-[8px] md:text-xs">{lurnie.stlbs}</span>
                                            <span className="text-gray-400 text-[8px] md:text-xs">•</span>
                                            <span className="text-gray-400 text-[8px] md:text-xs">{lurnie.quizzes}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full mr-1 relative">
                                                <img src="/images/my-box/icon7.png" alt="user" className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-white text-[8px] md:text-xs">{lurnie.engagement}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                  </>
                )}
                
                {(activeSection === "Collections" || activeSection === "Channels" || activeSection === "Subscriptions") && (
                  <div className="flex items-center justify-center h-[400px] text-white text-xl">
                    <p>The {activeSection} feature will be available soon!</p>
                  </div>
                )}
            </div>
        </div>
    )
}

function NavItem({ icon, label, count, active = false, onClick }: NavItemProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-between px-[15px] md:px-6 py-2 md:py-3 cursor-pointer rounded-[10px] h-8 md:h-10 font-semibold text-sm md:text-base",
                active ? "bg-activeColorV1 text-[#424242]" : "text-white hover:bg-[#2A2A30] ",
            )}
            onClick={onClick}
        >
            <div className="flex items-center">
                <img src={icon} width={20} height={20} alt={label} className="w-5 h-5 md:w-6 md:h-6 mr-[8px] md:mr-[10px]" />
                <span className={active ? "font-medium" : ""}>{label}</span>
                <span className="text-xs md:text-sm ml-[8px] md:ml-[10px]">({count})</span>
            </div>
            <div className="flex items-center">
                <IconChevronRight size={14} className="md:hidden" />
                <IconChevronRight size={16} className="hidden md:block" />
            </div>
        </div>
    )
}
