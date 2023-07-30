import { auth } from "@clerk/nextjs";
import { db } from "@sayvoca/database";
import { NextResponse } from "next/server";

export async function GET() {

  const { userId, getToken } = auth();
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
  const token = await getToken()

  const words = await db.word.findMany();


  
  const data = { message: 'Hello World', test: userId, token, words };
  return NextResponse.json({ data });
}