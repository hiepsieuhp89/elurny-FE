import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/Common/CustomSelect";
import { ScrollArea } from "@/components/ui/scroll-area";
import { leaderboardData } from "@/mock/mockData";
import Header from "@/components/Common/Header";

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState("Weekly");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-backgroundColorV1">
      <Header />
      <div className="md:p-[30px] p-4">
        <Button
          variant="default"
          className="rounded-[10px] h-10 w-10 bg-[#0E0E0E] hover:bg-[#0E0E0E]/90 mb-5"
          onClick={() => navigate('/admin/quest-list')}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
          <h1 className="text-white md:text-4xl text-2xl font-semibold">Leader Board</h1>
          <Select>
            <SelectTrigger className="w-[116px] bg-cardColorV1 text-white border-none">Weekly</SelectTrigger>
            <SelectContent className="w-[116px]">
              <SelectItem value="Daily" onClick={() => setTimeframe("Daily")}>Daily</SelectItem>
              <SelectItem value="Weekly" onClick={() => setTimeframe("Weekly")}>Weekly</SelectItem>
              <SelectItem value="Monthly" onClick={() => setTimeframe("Monthly")}>Monthly</SelectItem>
              <SelectItem value="All Time" onClick={() => setTimeframe("All Time")}>All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full rounded-[10px] pb-2">
          <motion.div
            className="rounded-[10px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollArea className="w-full md:overflow-hidden">
              <div className="min-w-[600px]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-cardColorV1">
                      <th className="py-4 md:px-6 px-3 text-left font-medium md:text-xs text-[10px] text-white">Number</th>
                      <th className="py-4  md:px-6 px-3 text-left font-medium md:text-xs text-[10px] text-white">Badge</th>
                      <th className="py-4 md:px-6 px-3 text-left font-medium md:text-xs text-[10px] text-white">Profile</th>
                      <th className="py-4 md:px-6 px-3 text-left font-medium md:text-xs text-[10px] text-white">Name</th>
                      <th className="py-4 md:px-6 px-3 text-left font-medium md:text-xs text-[10px] text-white">Level</th>
                      <th className="py-4 md:px-6 px-3 text-right font-medium md:text-xs text-[10px] text-white">Score</th>
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
                        <td className="py-4 md:px-6 px-3 text-grayV2-400 md:text-sm text-[10px]">#{index + 1}</td>
                        <td className="py-4 md:px-6 px-3">
                          <div className="md:h-[30px] md:w-[30px] h-[24px] w-[24px] relative flex items-center justify-center">
                            <img
                              height={50}
                              width={50}
                              src={`/images/quest-list/${user.badge}.png`} alt="badge" className="w-full h-full object-contain" />
                          </div>
                        </td>
                        <td className="py-4 md:px-6 px-3">
                          <div className="md:h-[30px] md:w-[30px] h-[24px] w-[24px] border-[1px] border-[#E1E6EF] rounded-full relative flex items-center justify-center overflow-hidden">
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
                        <td className="py-4 md:px-6 px-3 text-white font-medium md:text-xs text-[10px]">{user.name}</td>
                        <td className="py-4 md:px-6 px-3 text-white md:text-xs text-[10px]">{user.level}</td>
                        <td className="py-4 md:px-6 px-3 text-right font-semibold md:text-xs text-[10px] text-activeColorV1">{user.score}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
