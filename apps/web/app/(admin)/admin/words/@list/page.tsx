import AdminWordsView from '@/components/admin-words-view'
import { db } from '@sayvoca/database'

interface WordsListPageProps {
}
export default async function AdminPage() {

  const words = await db.word.findMany()

  return (
    <AdminWordsView words={words} />
  )
}
