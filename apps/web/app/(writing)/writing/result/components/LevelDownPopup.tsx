"use client"
import { Button, SadLottie } from "@sayvoca/ui"
import { Dialog, DialogContent, DialogClose } from "@sayvoca/ui/dialog"
import UserRankImage from "@/components/user-rank-image"
type LevelDownPopupProps = {
  level: number
}
export default function LevelDownPopup({ level }: LevelDownPopupProps) {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <section>
          <h1 className="text-center text-2xl font-bold">레벨 다운</h1>
          <div className="flex justify-center">
            <div className="h-[262px] w-[262px]">
              <SadLottie />
            </div>
          </div>
          <p className="whitespace-pre-wrap text-center text-lg font-medium text-gray-600">
            레벨이 내려갔습니다.{"\n"}아쉽지만 다음에는 꼭 성공해보세요!
          </p>
          <div className="flex items-center justify-center">
            <UserRankImage level={level} />
            <p className="mt-4 animate-bounce text-center text-5xl font-extrabold text-purple-800">
              {level}
            </p>
          </div>
          <div className="flex justify-end gap-2 pt-5">
            <DialogClose asChild>
              <Button variant={"submit"} className="w-full">
                확인
              </Button>
            </DialogClose>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
