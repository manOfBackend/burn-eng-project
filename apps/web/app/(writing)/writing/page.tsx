import WritingErrorContainer from "@/components/problem/writing-error-container"
import WritingProblemContainer from "@/components/problem/writing-problem-container"
export default async function Page() {
  return (
    <WritingErrorContainer>
      <WritingProblemContainer />
    </WritingErrorContainer>
  )
}
