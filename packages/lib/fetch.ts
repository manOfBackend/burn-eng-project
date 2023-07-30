'use server'
import { db } from '@sayvoca/database'
export async function addWord(word: string, meaning: string) {
  try {
    const result = await db.word.create({
      data: {
        word,
        meaning,
      }
    })
    console.info(result)
  } catch (error) {
    console.error(error)
  }
}