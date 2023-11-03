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
})

export const sentenceHistoryDatesResponseSchema = z.object({
  dates: z.string().array(),
})

export const sentenceHistoryResponseSchema = z.array(z.object({
  sentence: z.string(),
  translatedSentence: z.string(),
  translatedFeedback: z.object(sentenceResponseSchema.shape),
}))

export const userInfoResponseSchema = z.object({
  email: z.string(),
  role: z.enum(['ADMIN', 'USER']),
  recentLevelHistories: z.object({
    additionalProp1: z.number(),
    additionalProp2: z.number(),
    additionalProp3: z.number(),
  }),
  level: z.number().min(1),
  exp: z.number(),
  todayTranslated: z.number(),
})

export const sentenceSchema = z.object({
  id: z.number(),
  createdAt: z.any(),
  enable: z.boolean(),
  level: z.number(),
  updatedAt: z.any().nullable(),
  deletedAt: z.any().nullable(),
  // sentenses: z.object({
  //   id: z.number(),
  //   sentense: z.string(),
  //   meaning: z.string().nullish(),
  // }).array().nullish(),
  // status: z.enum(['active', 'inactive']).default('active'),
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