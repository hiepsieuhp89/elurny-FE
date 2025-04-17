"use client"
import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import useMobile from "@/hooks/useMobile"

type ContributionDay = {
  date: Date
  count: number
}
type TooltipInfo = {
  visible: boolean
  x: number
  y: number
  date: Date
  count: number
}
export default function ContributionGraph() {
  const [tooltip, setTooltip] = useState<TooltipInfo>({
    visible: false,
    x: 0,
    y: 0,
    date: new Date(),
    count: 0,
  })
  const isMobile = useMobile()
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
  const contributionData = generateSampleData()
  const months = getMonthsToDisplay(isMobile)
  
  const getColorForDate = (date: Date | null): string => {
    if (!date) return "bg-transparent"
    const dateString = date.toISOString().split("T")[0]
    const day = contributionData.find((d) => d.date.toISOString().split("T")[0] === dateString)
    if (!day) return "bg-[#1F1F20]"
    if (day.count === 0) return "bg-[#1F1F20]"
    if (day.count <= 2) return "bg-[#3A3245]"
    if (day.count <= 4) return "bg-[#4C3B67]"
    if (day.count <= 6) return "bg-[#65458D]"
    return "bg-[#8053BB]"
  }

  const handleMouseEnter = (e: React.MouseEvent, date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    const day = contributionData.find((d) => d.date.toISOString().split("T")[0] === dateString)

    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      date,
      count: day?.count || 0,
    })
  }

  const handleDelayedMouseEnter = (e: React.MouseEvent, date: Date) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
    }

    hoverTimerRef.current = setTimeout(() => {
      handleMouseEnter(e, date)
    }, 300)
  }

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
    
    setTooltip((prev) => ({ ...prev, visible: false }))
  }

  const grid = createGrid(isMobile)

  return (
    <div className="py-3 md:py-5 px-2 md:px-8 bg-[#2A2A2B] border border-white/20 rounded-[10px] w-full overflow-x-auto">
      <div className="relative min-w-[320px] md:min-w-0">
        <div className="flex mb-1 md:mb-2 text-lg font-medium">
          <div className="w-8 md:w-12"></div>
          <div className="w-full grid grid-cols-4 md:grid-cols-8">
            {months.map((month, index) => (
              <div key={month+index} className="text-center text-[10px] md:text-base text-white font-medium">
                {month}
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col mr-1 md:mr-2 text-right gap-[3px] md:gap-[5px]">
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Sun</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Mon</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Tue</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Wed</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Thu</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Fri</div>
            <div className="h-[16px] md:h-[30px] flex items-center font-medium text-white text-[10px] md:text-base">Sat</div>
          </div>

          <div className="flex-1">
            <div className="grid grid-rows-7 grid-flow-col gap-[2px] md:gap-[5px]">
              {grid.map((row, rowIndex) =>
                row.map((date, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={cn("h-[16px] w-[16px] md:h-[30px] md:w-[30px] rounded-[4px] md:rounded-[5px] transition-colors", getColorForDate(date))}
                    onMouseEnter={(e) => date && handleDelayedMouseEnter(e, date)}
                    onMouseLeave={handleMouseLeave}
                  />
                )),
              )}
            </div>
          </div>
        </div>

        {tooltip.visible && (
          <div
            className="absolute bg-amber-700 text-white px-2 md:px-3 py-1 md:py-2 rounded-md text-[9px] md:text-sm z-10 pointer-events-none"
            style={{
              left: tooltip.x,
              top: tooltip.y - 40,
              transform: "translateX(-50%)",
            }}
          >
            <div className="flex items-center">
              <span>
                {tooltip.count === 0
                  ? `No contribution On ${tooltip.date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`
                  : `${tooltip.count} contributions on ${tooltip.date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`}
                <sup>th</sup>
              </span>
            </div>
            <div className="absolute w-2 h-2 bg-amber-700 rotate-45 left-1/2 -bottom-1 -ml-1"></div>
          </div>
        )}

        <div className="flex items-center justify-center mt-3 md:mt-6 text-[9px] md:text-sm">
          <span className="mr-[3px] md:mr-[10px] text-xs md:text-base text-white font-medium">Less</span>
          <div className="flex gap-[2px] md:gap-[5px]">
            <div className="h-3 w-3 md:h-5 md:w-5 rounded-[3px] md:rounded-[5px] bg-[#1F1F20] flex items-center justify-center text-[8px] md:text-xs text-white">0</div>
            <div className="h-3 w-3 md:h-5 md:w-5 rounded-[3px] md:rounded-[5px] bg-[#3A3245] flex items-center justify-center text-[8px] md:text-xs text-white">
              2
            </div>
            <div className="h-3 w-3 md:h-5 md:w-5 rounded-[3px] md:rounded-[5px] bg-[#4C3B67] flex items-center justify-center text-[8px] md:text-xs text-white">
              4
            </div>
            <div className="h-3 w-3 md:h-5 md:w-5 rounded-[3px] md:rounded-[5px] bg-[#65458D] flex items-center justify-center text-[8px] md:text-xs text-white">
              6
            </div>
            <div className="h-3 w-3 md:h-5 md:w-5 rounded-[3px] md:rounded-[5px] bg-[#8053BB] flex items-center justify-center text-[8px] md:text-xs text-white">
              8+
            </div>
          </div>
          <span className="ml-[3px] md:ml-[10px] text-xs md:text-base text-white font-medium">More</span>
        </div>
      </div>
    </div>
  )
}

function generateSampleData(): ContributionDay[] {
  const data: ContributionDay[] = []
  const currentYear = new Date().getFullYear()

  for (let month = 0; month < 8; month++) {
    for (let day = 1; day <= 30; day++) {
      const date = new Date(currentYear, month, day)

      let count = 0

      if (month < 3) {
        if (Math.random() > 0.6) {
          count = Math.floor(Math.random() * 10)
        }
      }

      if (month === 2 && day === 4) {
        count = 0
      }

      data.push({ date, count })
    }
  }

  return data
}

function getMonthsToDisplay(isMobile: boolean): string[] {
  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"]
  // Trả về 4 tháng đầu tiên cho mobile, toàn bộ 8 tháng cho desktop
  return isMobile ? allMonths.slice(0, 4) : allMonths
}

function createGrid(isMobile: boolean): (Date | null)[][] {
  const grid: (Date | null)[][] = []
  const currentYear = new Date().getFullYear()
  const monthsToShow = isMobile ? 4 : 8

  for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
    const row: (Date | null)[] = []

    for (let month = 0; month < monthsToShow; month++) {
      for (let col = 0; col < 3; col++) {
        const dayOfMonth = col * 10 + dayOfWeek + 1

        if (dayOfMonth <= 28) {
          row.push(new Date(currentYear, month, dayOfMonth))
        } else {
          row.push(new Date(currentYear, month, dayOfMonth))
        }
      }
    }

    grid.push(row)
  }

  return grid
}
