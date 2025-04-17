import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"

interface QuestCardDetailsProps {
  variant: "text" | "image"
  title: string
  description?: string
  imageUrl?: string
  category: string
  date: string
  stats?: {
    subs: number
    quizzes: number
    views: number
  }
}

export function QuestCardDetails({ variant, title, description, imageUrl, category, date, stats }: QuestCardDetailsProps) {
  return (
    <Card className={`overflow-hidden !min-h-[220px] !rounded-[10px] flex flex-col !bg-CardColorV1 border-none w-full ${variant === "image" ? "md:max-w-md" : "md:max-w-sm"}`}>
      {variant === "text" ? (
        <>
          <div className="relative px-3 pt-3">
            <div className="flex justify-between items-center mb-5">
              <span className="text-[8px] text-white font-medium uppercase tracking-wider">
                {category} | {date}
              </span>
              <button className="h-4 w-4 bg-mainColorV1 rounded-full flex items-center justify-center">
                <MoreVertical className="h-3 w-3 text-cardColorV1" />
              </button>
            </div>
            <h2 className="text-sm font-bold text-white mb-6">{title}</h2>
            {description && <p className="text-[10px] text-white font-medium mb-4">{description}</p>}
          </div>
          <div className="flex-1 p-3 h-full flex flex-col justify-end">
            <div className="flex justify-between items-center w-full">
            {stats && (
              <div className="flex justify-between items-center w-full">
                <span className="text-[8px] text-white font-medium uppercase tracking-wider">
                  {stats.subs} Subs | {stats.quizzes} Quizzes
                </span>
                <div className="flex items-center gap-[5px]">
                  <div className="h-4 w-4 relative">
                    <img src="/images/quest-list/icon17.png" alt="eye" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[8x] text-white">
                    {stats.views > 999 ? `${(stats.views / 1000).toFixed(0)}k` : stats.views}
                  </span>
                </div>
              </div>
            )}
            </div>
          </div>
        </>
      ) : (
        <>
          {imageUrl && (
            <div className="relative h-[100px] w-full">
              <img
                src={"/images/sample-img.png"}
                alt={title}
                draggable={false}
                className="object-cover h-full w-full"
              />
            </div>
          )}
          <div className="relative p-3">
            <div className="flex justify-between items-center mb-2">
            <span className="text-[8px] text-white font-medium uppercase tracking-wider">
                {category} | {date}
              </span>
            </div>
            <h2 className="text-sm font-bold text-white">{title}</h2>
          </div>
        </>
      )}
    </Card>
  )
}
