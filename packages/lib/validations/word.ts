import * as z from "zod"


export const sentenceInputSchema = z.object({
  language: z.enum(['KOREAN', 'ENGLISH']).default('KOREAN'),
  sentence: z.string().min(1, { message: '문장을 입력해주세요.' }),
})

export const sentenceResponseSchema = z.object({
  meaningAccuracy: z.number(),
  grammarAccuracy: z.number(),
  naturalness: z.number(),
  overallEvaluationScore: z.number(),
  advice: z.string(),
  betterTranslatedSentences: z.string().array(),
  feedbackResult: z.enum(['PASS', 'FAIL']),
})

export const sentenceProblemResponseSchema = z.object({
  id: z.number(),
  sentence: z.string(),
  level: z.number(),
  createdAt: z.any(),
  updatedAt: z.any().nullable(),
  deletedAt: z.any().nullable(),
  enable: z.boolean(),
  language: z.enum(['KOREAN', 'ENGLISH']),
  percentageOfCorrectAnswers: z.number(),
})

export const sentenceHistoryDatesResponseSchema = z.object({
  dates: z.string().array(),
})

export const sentenceHistoryResponseSchema = z.array(z.object({
  sentence: z.string(),
  translatedSentence: z.string(),
  translatedFeedback: z.object(sentenceResponseSchema.shape),
}))

export const submitDailyGoalResponseSchema = z.object({
  dailyGoal: z.number(),
})

export const userInfoResponseSchema = z.object({
  email: z.string(),
  /** 유저 권한 
   * ADMIN: 관리자
   * USER: 일반 유저
  */
  role: z.enum(['ADMIN', 'USER']),
  /** 레벨 변화 */
  recentUserLevelHistories: z.array(z.object({
    date: z.string(),
    level: z.number(),
  })),
  /** 현재 레벨 */
  level: z.number().min(1),
  /** 해당 레벨에서 채운 경험치 */
  userExp: z.number(),
  /** 현재 레벨에서 전체 경험치 */
  totalLevelExp: z.number(),
  /** 하루 목표량 */
  dailyGoal: z.number(),
  /** 하루 목표 중 푼 수 */
  dailyGoalCount: z.number()
})

export const sentenceSchema = z.object({
  id: z.number(),
  createdAt: z.any(),
  enable: z.boolean(),
  level: z.number(),
  updatedAt: z.any().nullable(),
  deletedAt: z.any().nullable(),
}).and(sentenceInputSchema)

export const sentencePageResponseSchema = z.object({
  totalPages: z.number(),
  totalElements: z.number(),
  size: z.number(),
  pageable: z.object({
    sort: z.object({
      sorted: z.boolean(),
      unsorted: z.boolean(),
      empty: z.boolean(),
    }),
    offset: z.number(),
    pageNumber: z.number(),
    pageSize: z.number(),
    paged: z.boolean(),
    unpaged: z.boolean(),
  }),
  number: z.number(),
  numberOfElements: z.number(),
  empty: z.boolean(),
  content: sentenceSchema.array(),
  first: z.boolean(),
  last: z.boolean(),
})

export const sentenceLevelSchema = z.object({
  levelToSentenceCounts: z.object({
    level: z.number(),
    sentenceCount: z.number(),
  }).array(),
})