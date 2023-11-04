import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { sessionTokenSchema } from "@sayvoca/lib/validations/auth";
import * as jose from "jose";
import { NextResponse } from "next/server";
import { UserRole } from "@sayvoca/lib/types";
import { env } from "@sayvoca/lib/env.mjs";

export default authMiddleware({
  publicRoutes: [
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/api(.*)",
    "/guest\/(.*)",
  ],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      return NextResponse.next()
    }
    const url = new URL(req.nextUrl.origin)

    if (req.nextUrl.pathname === '/') {
      url.pathname = '/dashboard'
      return NextResponse.redirect(url)
    }
    const publicKey = env.CLERK_PEM_PUBLIC_KEY as string;
    const sessionObj = req.cookies.get('__session')

    if (!sessionObj || !sessionObj.value) {
      url.pathname = "/signin"
      return NextResponse.redirect(url)
    }

    let verified;
    try {
      const publicKeySet = await jose.importSPKI(publicKey, "RS256")
      verified = await jose.jwtVerify(sessionObj?.value as string, publicKeySet)
    }
    catch (e) {
    }
    if (!verified || !auth.userId || !sessionTokenSchema.safeParse(verified)) {
      url.pathname = "/signin"
      return NextResponse.redirect(url)
    }
    const { payload: sessionTokenBody } = sessionTokenSchema.parse(verified)

    if (req.nextUrl.pathname.startsWith('/admin') && sessionTokenBody.publicMeta) {
      const { role } = sessionTokenBody.publicMeta
      if (role !== 'admin') {
        url.pathname = '/no-admin'
        return NextResponse.redirect(url)
      }
    }

    if (!sessionTokenBody.publicMeta?.role) {
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
