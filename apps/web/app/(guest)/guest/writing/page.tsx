import WritingGuestProblemContainer from "@/components/problem/writing-problem-guest-container"
import WritingErrorContainer from "@/components/problem/writing-error-container"
export default async function Page() {
  return (
    <WritingErrorContainer>
      <WritingGuestProblemContainer />
    </WritingErrorContainer>
  )
}
