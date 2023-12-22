"use client"
import { Button, CongratulationsLottie } from "@sayvoca/ui"
import { Dialog, DialogContent, DialogClose } from "@sayvoca/ui/dialog"
import Image from "next/image"
import UserRankImage from "@/components/user-rank-image"
type LevelUpPopupProps = {
  level: number
}
export default function LevelUpPopup({ level }: LevelUpPopupProps) {
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <section>
          <h1 className="text-center text-2xl font-bold">레벨업!</h1>
          <div className="flex justify-center">
            <div className="h-[262px] w-[262px]">
              <CongratulationsLottie />
            </div>
          </div>
          <p className="text-center text-lg font-medium text-gray-600">
            레벨이 올랐습니다. 축하합니다!
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
