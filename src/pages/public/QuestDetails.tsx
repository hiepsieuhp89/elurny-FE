import { motion } from 'framer-motion';
import { IconEye} from '@tabler/icons-react';
import { QuestCardDetails } from '@/components/QuestListPage/QuestCardDetails';
import { chemistryTopics } from '@/mock/mockData';
import { CustomScrollArea } from '@/components/Common/CustomScrollArea';
import { leaderboardData } from '@/mock/mockData';
import useMobile from '@/hooks/useMobile';
import Header from '@/components/Common/Header';

const QuestDetails = () => {
    const currentLevel = 3;
    const isMobile = useMobile();
    return (
        <div className="min-h-screen bg-backgroundColorV1">
            {/* header */}
            <Header />
            <div className="flex flex-col md:flex-row items-start gap-[30px] pb-[100px] md:pb-[30px] md:p-[30px] p-4">
                {/* Large Section */}
                <div className="w-full">
                    <h1 className='text-2xl md:text-4xl font-semibold text-white mb-5'>Quest Details With Lurnies</h1>
                    <div className='flex flex-col md:flex-row items-stretch gap-[30px]'>
                        <div className="bg-[#2E2D33] min-w-[100%] md:min-w-[304px] p-5 rounded-[10px] mb-5 md:mb-0">
                            <div className="flex flex-col gap-3">
                                {Array.from({ length: 10 }).map((_, index) => {
                                    const level = index + 1;
                                    return (
                                        <motion.div
                                            key={`level-${level}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`relative flex items-center justify-between p-3 h-[50px] rounded-[10px] 
                                                ${Number(level) > currentLevel ? '!opacity-20 !bg-mainColorV1' : ''} ${Number(currentLevel) === Number(level) ? 'bg-mainColorV1' : 'bg-[#03B461]'} `}
                                        >
                                            <div className="flex justify-between items-center gap-3">
                                                <div className="text-xs font-semibold text-white">Level : {level}</div>
                                                <div className='w-[2px] h-[10px] bg-white/50'></div>
                                                <div className="text-xs font-semibold text-white">XP : 30</div>
                                            </div>
                                            {currentLevel === level && (
                                                <img src="/images/quest-list/bronze.png" alt="Current Level" className="flex-shrink-0 w-5 h-[28px]" />
                                            )}
                                            {level === 5 && (
                                                <img src="/images/quest-list/silver.png" alt="Current Level" className="flex-shrink-0 w-5 h-[28px]" />
                                            )}
                                            {level === 7 && (
                                                <img src="/images/quest-list/gold.png" alt="Current Level" className="flex-shrink-0 w-5 h-[28px]" />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ height: isMobile ? "500px" : "824px" }} className="w-full">
                            <CustomScrollArea className="w-full h-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full items-stretch">
                                    {/* Example of text variant */}
                                    <div className="w-full mx-auto">
                                        <QuestCardDetails
                                            variant="text"
                                            title={chemistryTopics[0].title}
                                            description={chemistryTopics[0].description}
                                            category={chemistryTopics[0].category}
                                            date={chemistryTopics[0].date}
                                            stats={chemistryTopics[0].stats}
                                        />
                                    </div>

                                    {/* Example of image variant */}
                                    <div className="w-full mx-auto">
                                        <QuestCardDetails
                                            variant="image"
                                            title={chemistryTopics[0].title}
                                            imageUrl={chemistryTopics[0].imageUrl}
                                            category={chemistryTopics[0].category}
                                            date={chemistryTopics[0].date}
                                        />
                                    </div>
                                    {chemistryTopics.map((topic, index) => (
                                        <div key={topic.id} className="w-full mx-auto">
                                            <QuestCardDetails
                                                variant={index % 2 === 0 ? "text" : "image"}
                                                title={topic.title}
                                                description={index % 2 === 0 ? topic.description : undefined}
                                                imageUrl={index % 2 === 0 ? undefined : topic.imageUrl}
                                                category={topic.category}
                                                date={topic.date}
                                                stats={index % 2 === 0 ? topic.stats : undefined}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CustomScrollArea>
                        </div>
                    </div>
                </div>
                {/* Leaderboard & Awards Section */}
                <div className="min-w-[100%] md:min-w-[318px] mt-5 md:mt-0">
                    <h1 className='text-2xl md:text-4xl font-semibold text-white mb-5'>Leader Board</h1>
                    <div className="h-[380px] overflow-x-auto">
                        <CustomScrollArea className="h-[380px] w-full" style={{ overflow: 'auto' }}>
                            <motion.div
                                className="overflow-hidden rounded-[10px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-cardColorV1">
                                            <th className="py-[10px] text-center font-medium text-xs text-white">Badge</th>
                                            <th className="py-[10px] text-center font-medium text-xs text-white">Profile</th>
                                            <th className="py-[10px] text-center font-medium text-xs text-white">Name</th>
                                            <th className="py-[10px] text-center font-medium text-xs text-white">Score</th>
                                            <th className="py-[10px] text-center font-medium text-xs text-white">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {leaderboardData.map((user, index) => (
                                            <motion.tr
                                                key={user.id}
                                                className="border-b border-[#4F4F4F] bg-backgroundColorV2 hover:bg-backgroundColorV2/70 transition-colors last:border-b-0"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <td className="py-[10px] text-center">
                                                    <div className="h-[30px] w-[30px] relative flex items-center justify-center mx-auto">
                                                        <img
                                                            height={50}
                                                            width={50}
                                                            src={`/images/quest-list/${user.badge}.png`} alt="badge" className="w-full h-full object-contain" />
                                                    </div>
                                                </td>
                                                <td className="py-[10px] text-center">
                                                    <div className="h-[30px] w-[30px] border-[1px] border-[#E1E6EF] rounded-full relative flex items-center justify-center overflow-hidden mx-auto">
                                                        <img
                                                            draggable={false}
                                                            height={30}
                                                            width={30}
                                                            src={"/images/sample-img.png"}
                                                            alt="Profile"
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="py-[10px] text-white font-medium text-xs text-center">{user.name}</td>
                                                <td className="py-[10px] font-semibold text-xs text-activeColorV1 text-center">{user.score}</td>
                                                <td className="py-[10px] h-full text-white text-xs text-center flex items-center justify-center">
                                                    <button className='flex items-center justify-center h-[30px] w-[30px]'>
                                                        <IconEye size={18} className='text-activeColorV1' />
                                                    </button>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>
                        </CustomScrollArea>
                    </div>
                    <h1 className='text-2xl md:text-4xl font-semibold text-white my-5'>Awards</h1>
                    <div className="h-[364px]">
                        <CustomScrollArea className="h-[364px] w-full" style={{ overflow: 'auto' }}>
                            <div className='bg-[#2E2D33] rounded-[10px] p-[15px]'>
                                <div className='flex items-center justify-between pb-[10px] border-b border-b-[#4F4F4F] gap-[15px]'>
                                    <div className='w-[52px] h-[70px] relative flex items-center justify-center'><img src="/images/my-box/achie1.png" alt="badge" className='w-full h-full object-contain' /></div>
                                    <p className='text-white text-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='flex items-center justify-between pb-[10px] border-b border-b-[#4F4F4F] gap-[15px]'>
                                    <div className='w-[52px] h-[70px] relative flex items-center justify-center'><img src="/images/my-box/achie2.png" alt="badge" className='w-full h-full object-contain' /></div>
                                    <p className='text-white text-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='flex items-center justify-between pb-[10px] border-b border-b-[#4F4F4F] gap-[15px]'>
                                    <div className='w-[52px] h-[70px] relative flex items-center justify-center'><img src="/images/my-box/achie3.png" alt="badge" className='w-full h-full object-contain' /></div>
                                    <p className='text-white text-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='flex items-center justify-between pb-[10px] border-b border-b-[#4F4F4F] gap-[15px]'>
                                    <div className='w-[52px] h-[70px] relative flex items-center justify-center'><img src="/images/my-box/achie4.png" alt="badge" className='w-full h-full object-contain' /></div>
                                    <p className='text-white text-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className='flex items-center justify-between pb-[10px] border-b border-b-[#4F4F4F] gap-[15px]'>
                                    <div className='w-[52px] h-[70px] relative flex items-center justify-center'><img src="/images/my-box/achie5.png" alt="badge" className='w-full h-full object-contain' /></div>
                                    <p className='text-white text-[10px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                        </CustomScrollArea>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuestDetails; 