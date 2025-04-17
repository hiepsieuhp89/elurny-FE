import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface MobileMenuItemProps {
  path: string;
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

const menuItems = [
  {
    path: "/",
    name: "Home",
    icon: "/images/home.png",
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

const subMenuItems = [
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
];

function MobileMenuItem({
  path,
  name,
  icon,
  isActive,
  onClick,
}: MobileMenuItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(path);
    setTimeout(() => {
      navigate(path);
    }, 0);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-200 cursor-pointer px-1",
      )}
      onClick={handleClick}
    >
      <Button
        className={cn(
          "relative p-0 h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-[5px]",
          isActive ? "bg-activeColorV1" : "bg-transparent hover:bg-backgroundColorV2"
        )}
      >
        <img
          draggable={false}
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="max-h-5 max-w-5 w-5 h-5 object-contain flex-shrink-0"
        />
      </Button>
      <span
        className={cn(
          "font-semibold text-[10px] mt-1 text-nowrap",
          isActive ? "text-activeColorV1" : "text-mainColorV1"
        )}
      >
        {name}
      </span>
    </div>
  );
}

function MobileMenu() {
  const { menuItems: activeMenuItems, setActive } = useSidebarMenu();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      {/* Fixed bottom navigation */}
      <div className="fixed z-50 bottom-0 left-0 right-0 bg-backgroundDarkColorV1 border-t border-borderColorV1 flex justify-between items-center px-2 py-2 shadow-lg">
        <div className="grid grid-cols-4 w-full gap-1">
          {menuItems.map((item) => {
            const menuItem = activeMenuItems.find(mi => mi.path === item.path);
            const isActive = menuItem ? menuItem.active : false;

            return (
              <MobileMenuItem
                key={item.path}
                {...item}
                isActive={isActive}
                onClick={setActive}
              />
            );
          })}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <div
                className={cn(
                  "flex flex-col items-center justify-center transition-all duration-200 cursor-pointer",
                  open ? "text-activeColorV1" : "text-mainColorV1"
                )}
              >
                <Button
                  className={cn(
                    "relative p-0 h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-[5px]",
                    open ? "bg-activeColorV1" : "bg-transparent hover:bg-backgroundColorV2"
                  )}
                >
                  <IconMenu2 className="text-mainColorV1 h-5 w-5" style={{ width: '24px', height: '24px' }} />
                </Button>
                <span className="font-semibold text-[10px] mt-1">
                  Menu
                </span>
              </div>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="bg-backgroundDarkColorV1 border-l border-borderColorV1 p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-white">Menu</h2>
                <SheetClose asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full bg-backgroundColorV2 hover:bg-backgroundColorV2/80"
                  >
                    <IconX className="h-4 w-4 text-white" />
                  </Button>
                </SheetClose>
              </div>

              <div className="flex flex-col space-y-5">
                {/* Sub menu items */}
                <div className="space-y-4">
                  {subMenuItems.map((item) => {
                    const menuItem = activeMenuItems.find(mi => mi.path === item.path);
                    const isActive = menuItem ? menuItem.active : false;

                    return (
                      <div key={item.path}
                        className="flex items-center space-x-3 text-white cursor-pointer py-1 hover:bg-backgroundColorV2 rounded-lg px-2 transition-colors"
                        onClick={() => {
                          navigate(item.path);
                          setActive(item.path);
                          setOpen(false);
                        }}
                      >
                        <div className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-md",
                          isActive ? "bg-activeColorV1" : "bg-backgroundColorV2"
                        )}>
                          <img
                            draggable={false}
                            src={item.icon}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="max-h-5 max-w-5 w-5 h-5 object-contain flex-shrink-0"
                          />
                        </div>
                        <span className={`text-sm ${isActive ? 'text-activeColorV1 font-bold' : 'text-white'}`}>
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Tài khoản */}
                <div className="border-t border-borderColorV1 pt-4">
                  <div
                    className="flex items-center space-x-3 text-white cursor-pointer py-1 hover:bg-backgroundColorV2 rounded-lg px-2 transition-colors"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar.png" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-white">Người dùng</p>
                      <p className="text-xs text-grayV2-500">@username</p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu; 