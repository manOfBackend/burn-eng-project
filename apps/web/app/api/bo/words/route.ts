import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const { userId, getToken } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const token = await getToken()
  console.log('Bearer ' + token)

  // const addWordResponse = await fetch('https://zammanvoca.fly.dev/words/english', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + apiToken,
  //   },
  //   body: JSON.stringify({
  //     "word": "test",
  //     "meaning": "meaning-test",
  //     "difficultyLevel": 1,
  //   })
  // })

  // const addWord = await addWordResponse.json()
  // console.log(addWord)

  const words = await fetch('https://zammanvoca-api.m0n5t3r.com/words/english?page=0&size=20', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  console.log(words.status)
  const json = await words.json()

  console.log(json)


  const data = { message: 'Hello World', test: userId, token, data: json };
  return NextResponse.json({ data });
}