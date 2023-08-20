import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const { userId, getToken } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const token = await getToken()
  const sessionObj = req.cookies.get('__session')

  return NextResponse.json({ token, session: sessionObj?.value });
}