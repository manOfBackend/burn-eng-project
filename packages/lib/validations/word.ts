import * as z from "zod"


export const wordInputSchema = z.object({
  word: z.string().min(1, { message: '1글자 이상 입력하세요.' }),
  meaning: z.string(),
})


export const wordSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sentenses: z.object({
    id: z.number(),
    sentense: z.string(),
    meaning: z.string().nullish(),
  }).array().nullish(),
  status: z.enum(['active', 'inactive']).default('active'),
}).and(wordInputSchema)
