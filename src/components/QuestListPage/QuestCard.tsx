import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/Common/CustomDropdown';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { mdiDotsVertical } from '@mdi/js';
import { Icon } from '@mdi/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Quest } from '@/constants/mockData';
import type { MouseEvent } from 'react';
import { mdiRefresh } from '@mdi/js';
import { IconCircleXFilled, IconEye } from '@tabler/icons-react';
import { Switch } from '@/components/ui/switch';
const questDetails = [
  {
    title: 'Quest Title',
    value: 'Maroon'
  },
  {
    title: 'Quest Skills',
    value: '08'
  },
  {
    title: 'Difficult Level',
    value: 'Beginner'
  },
  {
    title: 'Skill Quest Level',
    value: '02'
  },
  {
    title: 'Quest Mode',
    value: 'Manually'
  },

]

const documents = [
  {
    icon: '/images/quest-list/icon11.png',
    title: 'graphic.pdf',
    type: 'file',

  },
  {
    icon: '/images/quest-list/icon12.png',
    title: 'graphic.ppt',
    type: 'file',

  },
  {
    icon: '/images/quest-list/icon13.png',
    title: 'graphic.video',
    type: 'file',
  },
  {
    icon: '/images/quest-list/icon14.png',
    title: 'graphic.link',
    type: 'file',
  },
  {
    icon: '/images/quest-list/icon15.png',
    title: 'It is a long established fact that a reader will be distracted by the readable content.',
    type: 'text',
  },
  {
    icon: '/images/quest-list/icon16.png',
    title: 'graphic.pdf',
    type: 'file',
  },
]

const skillLevels = [
  {
    title: 'Level Range',
    value: '03',
    type: 'text'
  },
  {
    title: 'Progression Rules',
    value: '08',
    type: 'text'
  },
  {
    title: 'Quiz Pass Percentage',
    value: '80%',
    type: 'text'
  },
  {
    title: 'Lesson completion',
    type: 'switch'
  },
  {
    title: 'Assessment Attempts Allowed',
    value: 'Unlimited',
    type: 'text'
  },
  {
    title: 'Manual Override',
    type: 'switch'
  },
  {
    title: 'Certification Issuance',
    value: 'Level 10',
    type: 'text'
  },
  {
    title: 'Badge & Rewards',
    value: '3.5.7.10',
    type: 'text'
  },

]
interface QuestCardProps {
  quest: Quest;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const QuestCard = ({ quest, onDelete, isAdmin }: QuestCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (onDelete) {
      onDelete(quest.id);
    }
    setShowDeleteDialog(false);
  };

  const handleCardClick = () => {
    if (isAdmin) {
      navigate(`/admin/quest-list/edit/${quest.id}`);
    } else {
      navigate(`/quest-list/${quest.id}`);
    }
  };

  return (
    <>
      <motion.div
        className="bg-cardColorV1 rounded-lg overflow-hidden cursor-pointer w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="relative">
          <img
            draggable={false}
            src={quest.imageSrc}
            alt={quest.title}
            className="w-full h-[174px] object-cover"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-[5px]">
            {isAdmin && <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
              <DropdownMenuTrigger asChild>
                <button className="bg-mainColorV1 hover:bg-mainColorV1/90 flex items-center justify-center rounded-[5px] h-[25px] w-[25px]"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking dropdown
                  }}
                >
                  <Icon path={mdiDotsVertical} size={0.8} className="text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[160px]">
                <DropdownMenuItem
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setOpenDropdown(false);
                    navigate(`/admin/quest-list/edit/${quest.id}`);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setOpenDropdown(false);
                    setTimeout(() => {
                      setShowDetails(true);
                    }, 100);
                  }}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setOpenDropdown(false);
                    setTimeout(() => {
                      setShowDeleteDialog(true);
                    }, 100);
                  }}
                >
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    setOpenDropdown(false);
                    navigate('/admin/quest-list/leaderboard');
                  }}
                >
                  View leaderboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>}
            {isAdmin && <button 
              className="bg-[#42424280] flex items-center justify-center rounded-[5px] h-[25px] w-[25px]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking refresh
              }}
            >
              <Icon path={mdiRefresh} size={0.8} className="text-white scale-x-[-1]" />
            </button>}
          </div>
          <div className="absolute bottom-[10px] right-[10px] bg-[#42424280] h-5 flex items-center justify-center text-xs text-white rounded-full text-[8px] px-[10px] py-[5px]">
            {quest.createdDaysAgo} DAYS AGO
          </div>
        </div>

        <div className="p-4">
          <h3 className="md:text-lg text-base font-bold text-white mb-[10px] line-clamp-1">{quest.title}</h3>
          <p className="text-grayV2-400 text-xs line-clamp-2 mb-[15px]">{quest.description}</p>
          <div className="flex items-center justify-between md:flex-row flex-wrap md:gap-0 gap-[10px]">
            <div className="text-white text-xs py-1 rounded flex items-center gap-[15px] md:gap-[5px] md:w-auto w-[48%]">
              <div className='h-5 w-5 relative flex-shrink-0'>
                <img src="/images/quest-list/icon1.png" alt="icon1" className='w-full h-full object-contain' />
              </div>
              <span>{quest.level}</span>
            </div>
            <div className='h-5 w-[1px] bg-[#4F4F4F] md:block hidden'></div>
            <div className="text-white text-xs py-1 rounded flex items-center gap-[15px] md:gap-[5px] md:w-auto w-[48%]">
              <div className='h-5 w-5 relative flex-shrink-0'>
                <img src="/images/quest-list/icon2.png" alt="icon2" className='w-full h-full object-contain' />
              </div>
              <span>{quest.views}</span>
            </div>
            <div className='h-5 w-[1px] bg-[#4F4F4F] md:block hidden'></div>
            <div className="text-white text-xs py-1 rounded flex items-center gap-[15px] md:gap-[5px] md:w-auto w-[48%]">
              <div className='h-5 w-5 relative flex-shrink-0'>
                <img src="/images/quest-list/icon3.png" alt="icon3" className='w-full h-full object-contain' />
              </div>
              <span>{quest.coins}</span>
            </div>
            <div className='h-5 w-[1px] bg-[#4F4F4F] md:block hidden'></div>
            <div className="text-white text-xs py-1 rounded flex items-center gap-[15px] md:gap-[5px] md:w-auto w-[48%]">
              <div className='h-5 w-5 relative flex-shrink-0'>
                <img src="/images/quest-list/icon4.png" alt="icon4" className='w-full h-full object-contain' />
              </div>
              <span>{quest.users / 1000}K</span>
            </div>
          </div>
        </div>
      </motion.div>

      <Sheet open={showDetails} onOpenChange={setShowDetails}>
        <SheetContent
          style={
            {
              width: '100%',
              maxWidth: '548px',
            }
          }
          className="rounded-[20px] h-[calc(100vh-40px)] absolute right-5 top-5 bottom-5 p-[20px] md:p-[20px] p-4 border-none pr-4" side="right">
          <ScrollArea className="h-full w-full">
            <div className="bg-white flex flex-col">
              <SheetHeader className="mb-6 bg-[#7F52BB1A] rounded-[15px]">
                <SheetTitle className="p-5 md:p-5 p-3 flex items-center justify-between">
                  <h1 className='text-[26px] md:text-[26px] text-xl font-semibold'>Quest Details</h1>
                  <button onClick={() => setShowDetails(false)}>
                    <IconCircleXFilled size={36} className='text-[#FF3D40] flex-shrink-0' />
                  </button>
                </SheetTitle>
              </SheetHeader>
              {/* Quest Details */}
              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 md:p-5 p-3 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] md:p-[15px] p-3 border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] md:text-[22px] text-lg font-semibold'>Quest Details</h2>
                </div>
                {questDetails.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0"
                  >
                    <span className="text-[#A7A7A7] text-base font-normal">{detail.title}</span>
                    <span className="text-[#A7A7A7] text-base font-normal">{detail.value}</span>
                  </div>
                  
                ))}

              </div>
              {/* Documents */}
              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 md:p-5 p-3 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] md:p-[15px] p-3 border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] md:text-[22px] text-lg font-semibold'>Documents</h2>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[15px]'>
                  {documents.map((detail) => (
                    <div
                      key={detail.title}
                      className="flex items-center bg-white rounded-[10px] justify-between py-[15px] px-3"
                    >
                      <div className='flex items-center gap-[10px] max-w-[80%]'>
                        <div className='h-5 w-5 relative flex-shrink-0'>
                          <img src={detail.icon} alt={detail.title} className='w-full h-full object-contain flex-shrink-0' />
                        </div>
                        {detail.type === 'file' ? 
                          <span className="text-[#1E1E1E] text-xs font-semibold truncate">{detail.title}</span> : 
                          <span className="text-[#1E1E1E] text-[8px] font-semibold line-clamp-2">{detail.title}</span>}
                      </div>
                      <IconEye size={20} className='text-mainColorV1 flex-shrink-0' />
                    </div>
                  ))}
                </div>
              </div>

              {/* Define Skill Levels & Progression Rules */}
              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 md:p-5 p-3 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] md:p-[15px] p-3 border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] md:text-[22px] text-lg font-semibold'>Define Skill Levels & Progression Rules</h2>
                </div>
                {skillLevels.map((skill) => (
                  <div
                    key={skill.title}
                    className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                  >
                    <span className="text-[#1E1E1E] md:text-base text-sm font-semibold">{skill.title}</span>
                    {skill.type === 'text'
                      ? <span className="text-[#A7A7A7] md:text-base text-sm font-normal">{skill.value}</span>
                      : <Switch className='data-[state=checked]:bg-mainColorV1 data-[state=unchecked]:bg-grayV2-400' />}
                  </div>
                ))}
              </div>

              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 md:p-5 p-3 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] md:p-[15px] p-3 border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] md:text-[22px] text-lg font-semibold'>Gamification Settings / XP Setting</h2>
                </div>
                <div
                  className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                >
                  <span className="text-[#1E1E1E] md:text-base text-sm font-semibold">Activity</span>
                  <span className="text-[#A7A7A7] md:text-base text-sm font-normal">Watching Video</span>
                </div>
                <div
                  className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                >
                  <span className="text-[#1E1E1E] md:text-base text-sm font-semibold">Default XP Points</span>
                  <span className="text-[#A7A7A7] md:text-base text-sm font-normal">10 XP</span>
                </div>
              </div>
              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 md:p-5 p-3 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] md:p-[15px] p-3 border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] md:text-[22px] text-lg font-semibold'>Badges</h2>
                </div>
                <div
                  className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                >
                  <span className="text-[#1E1E1E] text-base font-semibold">Selected Badges</span>
                  <span className="text-[#A7A7A7] text-base font-normal">3</span>
                </div>
                <div
                  className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                >
                  <span className="text-[#1E1E1E] text-base font-semibold">Type Of Badges</span>
                  <span className="text-[#A7A7A7] text-base font-normal">Pre - Designed Badges</span>
                </div>
                <div
                  className="flex items-center pt-3 cursor-pointer border-t !border-t-[#EFEEEF] first:border-t-0 justify-between"
                >
                  <span className="text-[#1E1E1E] text-base font-semibold">Level: 3</span>
                  <div className='h-[50px] w-[50px] relative flex items-center justify-center bg-[#ECECEC] rounded-full p-[10px]'>
                    <img
                      draggable={false}
                      src="/images/quest-list/bronze.png" alt="bronze" className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="mb-5 border border-[#E8E8E8] bg-[#21202608] rounded-[15px] p-5 flex flex-col gap-[15px]">
                <div className='flex items-center justify-between bg-white rounded-[15px] p-[15px] border border-[#E9E9E9]'>
                  <h2 className='text-[#1E1E1E] text-[22px] font-semibold'>Leader Board</h2>
                </div>
                <div className='rounded-t-[15px] bg-[#F0F0F0] w-full grid grid-cols-2 gap-x-[40px] gap-y-[10px] p-5'>
                  {/* row 1 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Number</p>
                    <p className='text-[#6C7278] font-medium text-base'>1</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Badge</p>
                    <div className='h-[50px] w-[50px] relative flex items-center justify-center bg-[#ECECEC] rounded-full p-[10px]'>
                      <img
                        draggable={false}
                        src="/images/quest-list/gold.png" alt="bronze" className='w-full h-full object-contain' />
                    </div>
                  </div>
                  {/* row 2 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Name</p>
                    <p className='text-[#6C7278] font-medium text-base'>Adison Mango</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Profile</p>
                    <div className='h-[50px] w-[50px] relative flex items-center justify-center bg-[#ECECEC] rounded-full overflow-hidden'>
                      <img
                        draggable={false}
                        src="/images/sample-img.png" alt="bronze" className='w-full h-full object-cover' />
                    </div>
                  </div>
                  {/* row 3 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Level</p>
                    <p className='text-[#6C7278] font-medium text-base'>LV.15</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Score</p>
                    <p className='text-[#6C7278] font-medium text-base'>54</p>
                  </div>
                </div>
                <div className='rounded-t-[15px] bg-[#F0F0F0] w-full grid grid-cols-2 gap-x-[40px] gap-y-[10px] p-5'>
                  {/* row 1 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Number</p>
                    <p className='text-[#6C7278] font-medium text-base'>1</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Badge</p>
                    <div className='h-[50px] w-[50px] relative flex items-center justify-center bg-[#ECECEC] rounded-full p-[10px]'>
                      <img
                        draggable={false}
                        src="/images/quest-list/gold.png" alt="bronze" className='w-full h-full object-contain' />
                    </div>
                  </div>
                  {/* row 2 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Name</p>
                    <p className='text-[#6C7278] font-medium text-base'>Adison Mango</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Profile</p>
                    <div className='h-[50px] w-[50px] relative flex items-center justify-center bg-[#ECECEC] rounded-full overflow-hidden'>
                      <img
                        draggable={false}
                        src="/images/sample-img.png" alt="bronze" className='w-full h-full object-cover' />
                    </div>
                  </div>
                  {/* row 3 */}
                  <div className='w-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Level</p>
                    <p className='text-[#6C7278] font-medium text-base'>LV.15</p>
                  </div>
                  <div className='ww-full flex items-center justify-between'>
                    <p className='text-[#1E1E1E] font-semibold text-base'>Score</p>
                    <p className='text-[#6C7278] font-medium text-base'>54</p>
                  </div>
                </div>
                <button className='text-mainColorV1 text-base font-bold'>View More</button>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="p-[20px] overflow-hidden bg-white md:w-[386px] w-[90%] max-w-[386px] border-none flex flex-col justify-center items-center !rounded-[20px] pb-[30px]">
        <IconCircleXFilled className='h-8 w-8 cursor-pointer text-[#FF3D40] absolute top-[15px] right-[15px]' onClick={() => setShowDeleteDialog(false)} />
          <div className="w-[208px] md:w-[208px] w-[80%] h-[165px] md:h-[165px] h-[140px] relative mb-[30px] md:mb-[30px] mb-5">
            <img 
            draggable={false}
            src="/images/quest-list/detele-bg.png" alt="" className='w-full h-full object-contain' />
          </div>
         <div className='flex flex-col'>
          <h1 className='md:text-[26px] text-xl font-semibold text-[#1E1E1E] text-center mb-3'>Delete Quest?</h1>
          <p className='text-[#666666] text-sm font-normal capitalize text-center mb-[30px] md:mb-[30px] mb-5'>Are you sure you want to delete this quest?</p>
          <div className="flex gap-[15px] w-full">
            <Button
              variant="outline"
                className="flex-1 h-[46px] md:text-lg text-base font-bold bg-[#3A3B3C] hover:bg-[#4E4F50] text-white hover:text-white/90 border-none rounded-[10px]"
                onClick={() => setShowDeleteDialog(false)}
              >
                No, keep it
              </Button>
              <Button
                variant="destructive"
                className="flex-1 h-[46px] md:text-lg text-base font-bold bg-[#FF4757] hover:bg-[#FF6B81] text-white border-none rounded-[10px]"
                onClick={handleDelete}
              >
                Yes, delete
              </Button>
            </div>
         </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuestCard; 