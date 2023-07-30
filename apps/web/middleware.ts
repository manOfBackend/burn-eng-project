import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { UserRole } from "./types";
import { NextResponse } from "next/server";


export default authMiddleware({
  publicRoutes: [
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/api(.*)",
  ],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      return NextResponse.next()
    }
    
    const url = new URL(req.nextUrl.origin)

    if (!auth.userId) {
      url.pathname = "/signin"
      return NextResponse.redirect(url)
    } 

    const user = await clerkClient.users.getUser(auth.userId)

    if (!user) {
      throw new Error("User not found.")
    }

    if (!user.privateMetadata.role) {
      await clerkClient.users.updateUser(auth.userId, {
        privateMetadata: {
          ...user.privateMetadata,
          role: "user" satisfies UserRole,
        },
      })
    }
  },
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
