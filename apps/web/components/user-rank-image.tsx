import React from "react"
import Image from "next/image"

type UserRankImageProps = {
  level: number
}
export default function UserRankImage({ level }: UserRankImageProps) {
  const getSrc = (level: number) => {
    return level < 10
      ? "/images/rank/bronze.png"
      : level < 20
      ? "/images/rank/silver.png"
      : "/images/rank/gold.png"
  }
  return <Image alt="rank" src={getSrc(level)} width={64} height={64} />
}
