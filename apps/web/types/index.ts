import { userAuthSchema } from "@sayvoca/lib/validations/auth"
import { z } from "zod"

export type UserRole = "user" | "admin" | "superadmin"

export type Inputs = z.infer<typeof userAuthSchema>
