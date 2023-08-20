import * as z from "zod"


export const wordInputSchema = z.object({
  word: z.string().min(1, { message: '1글자 이상 입력하세요.' }),
  meaning: z.string(),
  difficultyLevel: z.number().optional().default(1),
})


export const wordSchema = z.object({
  id: z.number(),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
  // sentenses: z.object({
  //   id: z.number(),
  //   sentense: z.string(),
  //   meaning: z.string().nullish(),
  // }).array().nullish(),
  // status: z.enum(['active', 'inactive']).default('active'),
}).and(wordInputSchema)

export const wordPageResponseSchema = z.object({
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
  content: wordSchema.array(),
  first: z.boolean(),
  last: z.boolean(),
})