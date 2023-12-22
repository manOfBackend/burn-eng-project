"use client"
import { useFeedbackStore } from "@/store/feedback"
import { useGuestStore } from "@/store/guest"
import { useAuth } from "@clerk/nextjs"
import { cn } from "@sayvoca/lib/utils"
import { Button } from "@sayvoca/ui/Button"
import { Icons } from "@sayvoca/ui/Icons"
import { useRouter } from "next/navigation"
import React, { useEffect, useLayoutEffect } from "react"
import { queryClient } from "../../../../../components/queryClient"
import SentenceFeedbackChart from "../../../../../components/sentence-feedback-chart"

const LevelUpPopup = dynamic(() => import("./LevelUpPopup"))
const LevelDownPopup = dynamic(() => import("./LevelDownPopup"))

import dynamic from "next/dynamic"

export default function WritingResultView() {
  const { data, problem, userInputSentence, additionalData } =
    useFeedbackStore()
  const router = useRouter()

  const { isSignedIn } = useAuth()

  const { level } = useGuestStore()

  useEffect(() => {
    queryClient.invalidateQueries(["sentence-random"])
    queryClient.invalidateQueries(["users"])
  }, [])

  useLayoutEffect(() => {
    if (!data?.feedbackResult) {
      router.replace("/dashboard")
    }
  }, [data, router])

  if (!data || !data?.feedbackResult) return null

  return (
    <>
      <section className="scrollbar-none mt-4">
        <h2 className="mb-2 text-xl font-bold">채점 결과</h2>
        <div className="flex items-center justify-center py-4">
          <div
            className={cn("radial-progress whitespace-pre-wrap text-center", {
              "text-green-800 bg-green-100": data?.feedbackResult === "PASS",
              "text-red-800 bg-red-100": data?.feedbackResult === "FAIL",
            })}
            style={
              {
                "--value": data?.overallEvaluationScore,
                "--size": "150px",
              } as React.CSSProperties
            }
          >
            <span>
              {data.feedbackResult}
              {"\n"}
              <span className="font-bold">{data.overallEvaluationScore}</span>
            </span>
          </div>
        </div>
        <div className="scrollbar-none h-[200px] w-full">
          {data ? (
            <SentenceFeedbackChart
              data={{
                overallEvaluationScore: data.overallEvaluationScore ?? 0,
                grammarAccuracy: data?.grammarAccuracy ?? 0,
                meaningAccuracy: data?.meaningAccuracy ?? 0,
                naturalness: data.naturalness ?? 0,
              }}
            />
          ) : null}
        </div>
        <section className="scrollbar-none mt-4 flex w-full flex-col gap-2">
          <article>
            <h2 className="font-bold">원문</h2>
            <p className="pl-2 text-sm">{problem?.sentence}</p>
          </article>
          <article>
            <h2 className="font-bold">입력한 문장</h2>
            <p className="pl-2 text-sm">
              {problem?.id ? (
                <>{userInputSentence?.get(problem.id)?.sentence}</>
              ) : null}
            </p>
          </article>
        </section>
        <section className="mt-4 h-52 w-full border-2 border-solid p-2">
          <h2 className="text-lg font-bold">코멘트</h2>
          <p className="pl-2 text-sm">{data?.advice}</p>
        </section>
        {data.betterTranslatedSentences?.length && (
          <ul className="mt-4 flex flex-col gap-2">
            <h2 className="text-lg font-bold">제안</h2>
            {data.betterTranslatedSentences.map((sentence, index) => (
              <li key={index} className="border-2 border-solid p-2 font-medium">
                {`${index + 1}. ${sentence}`}
              </li>
            ))}
          </ul>
        )}
        <article className="mt-4 flex gap-2">
          <Button
            className="w-full gap-2"
            variant={"dashboard"}
            disabled={!isSignedIn && level >= 5 ? true : false}
            size={"icon"}
            onClick={() => {
              if (isSignedIn) {
                router.replace("/writing")
              } else {
                router.replace("/guest/writing")
              }
            }}
          >
            <Icons.arrowRightCircle color="#9108bf" />
            다음문제
          </Button>
          <Button
            className="w-full gap-2"
            variant={"dashboard"}
            size={"icon"}
            onClick={() => {
              router.replace("/dashboard")
            }}
          >
            <Icons.home color="#9108bf" />
            돌아가기
          </Button>
        </article>
        {!isSignedIn && (
          <article className="mt-14 flex w-full justify-center">
            <div
              className="tooltip tooltip-open tooltip-info animate-bounce before:font-bold before:text-white "
              data-tip="회원가입을 하면 훨씬 많은 기능이 있어요!"
            >
              <button
                className="btn btn-info text-xl font-bold text-white"
                onClick={() => {
                  router.replace("/signup")
                }}
              >
                회원가입
              </button>
            </div>
          </article>
        )}
      </section>
      {additionalData?.userLevelDiff === "UP" ? (
        <LevelUpPopup level={additionalData.userLevel} />
      ) : null}
      {additionalData?.userLevelDiff === "DOWN" ? (
        <LevelDownPopup level={additionalData.userLevel} />
      ) : null}
    </>
  )
}
