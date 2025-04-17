import { motion } from 'framer-motion';

const QuestCardSkeleton = () => {
  return (
    <motion.div 
      className="bg-cardColorV1 rounded-lg overflow-hidden cursor-pointer w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <div className="w-full h-48 bg-borderColorV1 animate-pulse" />
        <div className="absolute top-2 right-2 flex flex-col gap-[5px]">
          <div className="bg-mainColorV1 flex items-center justify-center rounded-[5px] h-[25px] w-[25px]" />
          <div className="bg-[#42424280] flex items-center justify-center rounded-[5px] h-[25px] w-[25px]" />
        </div>
        <div className="absolute bottom-[10px] right-[10px] bg-[#42424280] h-5 flex items-center justify-center rounded-full w-20 animate-pulse" />
      </div>
      
      <div className="p-4">
        <div className="h-6 bg-borderColorV1 rounded mb-[10px] animate-pulse" />
        <div className="h-4 bg-borderColorV1 rounded mb-[15px] animate-pulse" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <div className="h-5 w-5 bg-borderColorV1 rounded-full animate-pulse" />
            <div className="h-3 w-8 bg-borderColorV1 rounded animate-pulse" />
          </div>
          <div className='h-5 w-[1px] bg-[#4F4F4F]'></div>
          <div className="flex items-center gap-[5px]">
            <div className="h-5 w-5 bg-borderColorV1 rounded-full animate-pulse" />
            <div className="h-3 w-8 bg-borderColorV1 rounded animate-pulse" />
          </div>
          <div className='h-5 w-[1px] bg-[#4F4F4F]'></div>
          <div className="flex items-center gap-[5px]">
            <div className="h-5 w-5 bg-borderColorV1 rounded-full animate-pulse" />
            <div className="h-3 w-8 bg-borderColorV1 rounded animate-pulse" />
          </div>
          <div className='h-5 w-[1px] bg-[#4F4F4F]'></div>
          <div className="flex items-center gap-[5px]">
            <div className="h-5 w-5 bg-borderColorV1 rounded-full animate-pulse" />
            <div className="h-3 w-8 bg-borderColorV1 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestCardSkeleton; 