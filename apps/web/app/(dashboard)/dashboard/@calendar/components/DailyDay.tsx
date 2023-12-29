import { cn } from "@sayvoca/lib/utils"
import { Icons } from "@sayvoca/ui/Icons"

interface DailyDayProps {
  status: "DOING" | "NOT_DONE" | "GOAL_DONE"
  text: string
}
export default function DailyDay({ status, text }: DailyDayProps) {
  return (
    <div
      className={cn(
        "relative grid h-8 w-8 place-content-center rounded-full border-2 border-solid bg-gray-100",
        {
          "bg-yellow-500 border-yellow-500": status === "GOAL_DONE",
          "bg-green-500 border-green-500": status === "DOING",
        }
      )}
    >
      {status === "GOAL_DONE" ? (
        <Icons.trophy className="h-4 w-4 text-white" />
      ) : status === "DOING" ? (
        <Icons.check className="h-4 w-4 text-white" />
      ) : (
        <p className="text-xs">{text}</p>
      )}
    </div>
  )
}
