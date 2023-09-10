import * as z from "zod"

export const userRoleSchema = z.enum(['admin', 'user'])

export const sessionTokenSchema = z.object({
  payload: z.object({
    publicMeta: z.object({
      role: userRoleSchema.optional(),
    }).optional(),
    email: z.string(),
    emailVerified: z.boolean(),
    azp: z.string(),
    iss: z.string(),
    sub: z.string(),
    exp: z.number(),
    iat: z.number(),
    jti: z.string(),
  })
})

export const userAuthSchema = z.object({
  email: z.string().email({
    message: "유효한 이메일 주소를 입력하세요.",
  }),
  password: z
    .string()
    .min(8, {
      message: "패스워드는 8글자 이상이어야 합니다.",
    })
    .max(30, {
      message: '패스워드는 30글자 이하이어야 합니다.',
    }),
})

export const addWordSchema = z.object({
  word: z.string().min(1, { message: "단어를 입력하세요." }),
  meaning: z
    .string().min(1, { message: "뜻을 입력하세요." })
})


export const signUpSchema = userAuthSchema.extend({
  confirmPassword: z
    .string()
    .min(8, {
      message: "패스워드는 8글자 이상이어야 합니다.",
    })
    .max(30, {
      message: '패스워드는 30글자 이하이어야 합니다.',
    }),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      path: ["confirmPassword"],
      message: "패스워드가 일치하지 않습니다."
    })
  }
})


export const verfifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "인증 코드는 6글자입니다.",
    })
    .max(6),
})

