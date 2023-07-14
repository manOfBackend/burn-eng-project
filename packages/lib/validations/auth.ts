import * as z from "zod"

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
    })
})

export const verfifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "인증 코드는 6글자입니다.",
    })
    .max(6),
})
