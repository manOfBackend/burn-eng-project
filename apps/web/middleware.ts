import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { sessionTokenSchema } from "@sayvoca/lib/validations/auth";
import * as jose from "jose";
import { NextResponse } from "next/server";
import { UserRole } from "./types";

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

    const publicKey = process.env.CLERK_PEM_PUBLIC_KEY as string;
    const sessionObj = req.cookies.get('__session')
    const publicKeySet = await jose.importSPKI(publicKey, "RS256")
    const verified = await jose.jwtVerify(sessionObj?.value as string, publicKeySet)
    

    const { payload: sessionTokenBody } = sessionTokenSchema.parse(verified)

    const url = new URL(req.nextUrl.origin)

    if (!auth.userId) {
      url.pathname = "/signin"
      return NextResponse.redirect(url)
    } 

    if (req.nextUrl.pathname.startsWith('/admin')) {
      const { role } = sessionTokenBody.publicMeta
      if (role !== 'admin') {
        url.pathname = '/no-admin'
        return NextResponse.redirect(url)
      }
    }

    if (!sessionTokenBody.publicMeta.role) {
      await clerkClient.users.updateUser(auth.userId, {
        publicMetadata: {
          ...sessionTokenBody.publicMeta,
          role: "user" satisfies UserRole
        }
      })
    }
  },
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
