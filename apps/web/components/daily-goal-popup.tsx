import { cn } from "@sayvoca/lib/utils"
import { Button, Icons } from "@sayvoca/ui"
import { Dialog, DialogContent } from "@sayvoca/ui/dialog"
import React from "react"

type DailyGoalPopupProps = {
  open: boolean
  onClose: () => void
  onConfirm: (goal: number) => void
  isSubmitting?: boolean
  goal: number
}
export default function DailyGoalPopup({
  open,
  onClose,
  onConfirm,
  isSubmitting,
  goal,
}: DailyGoalPopupProps) {
  const [selectedGoal, setSelectedGoal] = React.useState(goal)

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent>
        <section>
          <h1 className="text-2xl font-bold">하루 목표</h1>
          <p className="text-gray-600">
            자신에게 적당한 하루 목표를 선택해보세요.
          </p>
          <div className="flex flex-wrap gap-2 pt-5">
            {[1, 3, 5, 8, 10, 15, 20].map((x) => (
              <article
                className={cn("h-20 w-20 rounded-2xl border", {
                  "border-gray-200": x !== selectedGoal,
                  "bg-purple-100 border-purple-100": x === selectedGoal,
                })}
                onClick={() => {
                  setSelectedGoal(x)
                }}
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <p className="text-2xl font-bold">{x}</p>
                  <p className="text-gray-600">문제</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-end gap-2 pt-5">
            <Button
              variant={"secondary"}
              className="text-gray-600"
              disabled={isSubmitting}
              onClick={() => {
                onClose()
              }}
            >
              취소
            </Button>
            <Button
              variant={"submit"}
              className="w-24"
              disabled={isSubmitting}
              onClick={() => {
                onConfirm(selectedGoal)
              }}
            >
              {isSubmitting ? (
                <Icons.spinner className="animate-spin" />
              ) : (
                "결정"
              )}
            </Button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
