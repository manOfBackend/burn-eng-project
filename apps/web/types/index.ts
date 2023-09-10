import { addWordSchema, signUpSchema, userAuthSchema, userRoleSchema } from "@sayvoca/lib/validations/auth"
import { wordInputSchema, wordPageResponseSchema, wordSchema } from "@sayvoca/lib/validations/word"
import { z } from "zod"

export type UserRole = z.infer<typeof userRoleSchema>

export type Inputs = z.infer<typeof userAuthSchema>

export type AddWord = z.infer<typeof addWordSchema>

export type signUpInputs = z.infer<typeof signUpSchema>

export type Word = z.infer<typeof wordSchema>

export type WordPage = z.infer<typeof wordPageResponseSchema>

export type InputWord = z.infer<typeof wordInputSchema>

export type CommonErrorCode = 'too_many_requests'

export type SignInErrorCode = CommonErrorCode | 'form_password_incorrect' | 'form_identifier_not_found'

export type SignUpErrorCode = CommonErrorCode | 'form_identifier_taken'
