import { userAuthSchema } from "@sayvoca/lib/validations/auth"
import { wordInputSchema, wordSchema } from "@sayvoca/lib/validations/word"
import { z } from "zod"

export type UserRole = "user" | "admin" | "superadmin"

export type Inputs = z.infer<typeof userAuthSchema>

export type Word = z.infer<typeof wordSchema>

export type InputWord = z.infer<typeof wordInputSchema>