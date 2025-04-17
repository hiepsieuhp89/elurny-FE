import { IconSearch, IconSquarePlus } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import LoadingSpinner from '@/components/Common/LoadingSpinner';
import QuestCard from '@/components/QuestListPage/QuestCard';
import QuestCardSkeleton from '@/components/QuestListPage/QuestCardSkeleton';
import { Input } from '@/components/ui/input';
import { questsData } from '@/constants/mockData';
import Header from '@/components/Common/Header';

const QuestListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuests, setFilteredQuests] = useState(questsData);
  const isAdmin = location.pathname.includes('admin');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredQuests(questsData);
    } else {
      const filtered = questsData.filter(quest =>
        quest.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQuests(filtered);
    }
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
     <Header />
      <div className='md:p-[30px] md:pb-[30px] pb-[100px] p-[15px] bg-backgroundColorV1'>
        <div className="md:mb-[30px] mb-5 flex justify-between items-center md:h-[46px]">
          <motion.h1
            className=" md:text-4xl text-2xl font-semibold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quest list
          </motion.h1>

          {isAdmin && <motion.button
            className="bg-mainColorV1 hover:bg-mainColorV1/90 text-white px-4 py-2 flex gap-[10px] items-center rounded-2xl h-[46px] w-[120px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/admin/quest-list/add')}
          >
            <IconSquarePlus size={18} className='flex-shrink-0' />
            <span className='text-xs font-bold'>Add New</span>
          </motion.button>}
        </div>

        <div className="relative md:hidden block mb-6">
          <Input
            type="text"
            placeholder="Search quest..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1B1C1F] text-textColorV1 rounded-full py-[10px] px-3 pl-10 w-full h-10 focus:outline-none text-xs"
          />
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} stroke={2} />
        </div>

        {isLoading ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto-fill gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {[...Array(12)].map((_, index) => (
                <div key={index}><QuestCardSkeleton key={index} /></div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <LoadingSpinner size={50} />
            </div>
          </>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto-fill gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredQuests.map((quest) => (
              <motion.div key={quest.id} variants={itemVariants}>
                <QuestCard quest={quest} isAdmin={isAdmin} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuestListPage; 