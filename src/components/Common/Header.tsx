import useMobile from "@/hooks/useMobile"
import { Button } from "../ui/button"
import { IconBell, IconMenu2, IconSearch } from "@tabler/icons-react"
import { useMobileMenuStore } from "@/store/useMobileMenuStore";
import { Input } from "../ui/input";
import { motion, AnimatePresence } from "framer-motion";
export default function Header() {
    const isMobile = useMobile()
    const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenuStore();
    return (
        <header className="h-20 bg-backgroundDarkColorV1 flex items-center justify-between py-5 z-50 md:px-9 px-[15px]">
            <div className="flex items-center h-10 relative md:w-[160px] w-[120px]">
                <img src="/images/logo.png" alt="Lurny Logo" className="object-contain h-full w-full" draggable={false} />
            </div>

            {isMobile ? (
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Button className="bg-[#0E0E0E] text-white h-10 w-10 rounded-[10px] border border-borderColorV1 flex items-center justify-center">
                            <div className="absolute w-3 h-3 border-[1.5px] border-[#111013] bg-[#FF8A57] rounded-full -top-0.5 -right-0.5"></div>
                            <IconBell size={18} className='flex-shrink-0' />
                        </Button>
                    </div>
                    <Button
                        className="bg-[#0E0E0E] text-white h-10 w-10 rounded-[10px] border border-borderColorV1 flex md:hidden items-center justify-center"
                        onClick={toggleMobileMenu}
                    >
                        <IconMenu2 size={18} className='flex-shrink-0' />
                    </Button>



                    <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div 
                            className="absolute top-20 right-0 left-0 bg-backgroundDarkColorV1 p-4 z-50 border-t border-borderColorV1"
                            initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full">
                                    <Input
                                        type="text"
                                        placeholder="Type Here To Start Searching..."
                                        className="bg-[#1B1C1F] text-textColorV1 rounded-full py-[10px] px-3 pl-10 w-full h-10 focus:outline-none text-xs"
                                    />
                                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} stroke={2} />
                                </div>

                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Type Here To Start Searching..."
                            className="bg-[#1B1C1F] text-textColorV1 rounded-full py-[10px] px-3 pl-10 w-[280px] h-10 focus:outline-none text-xs"
                        />
                        <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} stroke={2} />
                    </div>
                    <div className="relative">
                        <Button className="bg-[#0E0E0E] text-white h-10 w-10 rounded-[10px] border border-borderColorV1 flex items-center justify-center">
                            <div className="absolute w-3 h-3 border-[1.5px] border-[#111013] bg-[#FF8A57] rounded-full -top-0.5 -right-0.5"></div>
                            <IconBell size={18} className='flex-shrink-0' />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
