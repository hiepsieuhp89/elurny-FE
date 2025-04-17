import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarItemProps {
  path: string;
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

const sidebarItems = [
  {
    path: "/",
    name: "Home",
    icon: "/images/home.png",
  },
  {
    path: "/create",
    name: "Create",
    icon: "/images/create.png",
  },
  {
    path: "/my-box",
    name: "My Box",
    icon: "/images/mybox.png",
  },
  {
    path: "/channels",
    name: "Channels",
    icon: "/images/channels.png",
  },
  {
    path: "/feed",
    name: "Feed",
    icon: "/images/feed.png",
  },
  {
    path: "/quest-list",
    name: "Quest",
    icon: "/images/quest.png",
  },
];

function SidebarItem({
  path,
  name,
  icon,
  isActive,
  onClick,
}: SidebarItemProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    onClick(path);
    navigate(path);
  };
  
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 transition-all duration-200 cursor-pointer",
      )}
      onClick={handleClick}
    >
      <Button className={`relative p-0 h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-[5px] ${isActive ? 'bg-activeColorV1' : 'bg-transparent'}`}>
        <img
          draggable={false}
          src={icon}
          alt={name}
          width={100}
          height={100}
          className="max-h-8 max-w-8 w-8 h-8 object-contain flex-shrink-0"
        />
      </Button>
      <span
        className="font-extrabold text-mainColorV1 text-xs mt-2 text-nowrap"
      >
        {name}
      </span>
    </div>
  );
}

function Sidebar() {
  const { menuItems, setActive } = useSidebarMenu();
  const navigate = useNavigate();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  
  const handleProfileClick = () => {
    navigate('/profile');
  };
  
  const handleSettingsClick = () => {
    navigate('/settings');
  };
  
  const handleLogoutClick = () => {
    // Implement logout logic here
    console.log('Logging out...');
    // Example: clearAuth(), removeToken(), etc.
    navigate('/login');
  };
  
  return (
    <motion.div
      className="fixed z-50 left-0 top-0 h-full w-20 bg-backgroundDarkColorV1 border-r border-borderColorV1 flex flex-col items-center py-12 px-3 justify-between"
    >
      <div className="flex flex-col space-y-2 w-full">
        {sidebarItems.map((item) => {
          const menuItem = menuItems.find(mi => mi.path === item.path);
          const isActive = menuItem ? menuItem.active : false;
          
          return (
            <SidebarItem 
              key={item.path} 
              {...item} 
              isActive={isActive}
              onClick={setActive}
            />
          );
        })}
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsAvatarHovered(true)}
            onHoverEnd={() => setIsAvatarHovered(false)}
            className="relative cursor-pointer"
          >
            <Avatar className="h-[50px] w-[50px] border-2 border-transparent transition-all duration-300" 
              style={{ 
                borderColor: isAvatarHovered ? 'rgb(var(--active-color))' : 'transparent',
                boxShadow: isAvatarHovered ? '0 0 10px rgba(var(--active-color), 0.5)' : 'none'
              }}
            >
              <AvatarImage src="/images/avatar.png" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            {isAvatarHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-backgroundDarkColorV1 px-2 py-1 rounded text-xs whitespace-nowrap"
              >
                User Profile
              </motion.div>
            )}
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-backgroundDarkColorV1 border border-borderColorV1 text-mainColorV1" align="end" sideOffset={5}>
          <DropdownMenuItem className="cursor-pointer hover:bg-activeColorV1 transition-colors" onClick={handleProfileClick}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer hover:bg-activeColorV1 transition-colors" onClick={handleSettingsClick}>
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-borderColorV1" />
          <DropdownMenuItem className="cursor-pointer hover:bg-red-900/30 text-red-400 transition-colors" onClick={handleLogoutClick}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}

export default Sidebar; 