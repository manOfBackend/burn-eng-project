import { InputSentence, SentenceProblemResponse, SentenceResponse } from '@sayvoca/lib'
import { create } from 'zustand'

type Feedback = Partial<SentenceResponse> & {
  userInputSentence?: Map<number, InputSentence>;
  problem?: SentenceProblemResponse;
}
type FeedbackStore = Feedback & {
  setUserInputSentence: (sentenceId: number, sentence: InputSentence) => void
  addFeedback: (feedback: SentenceResponse) => void
  setProblem: (problem: SentenceProblemResponse) => void
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  addFeedback: (feedback) => set(feedback),
  setProblem: (problem) => set({ problem }),
  setUserInputSentence: (sentenceId, userInputSentence) => {
    const { userInputSentence: prevUserInputSentence } = useFeedbackStore.getState()
    const newUserInputSentence = new Map(prevUserInputSentence)
    newUserInputSentence.set(sentenceId, userInputSentence)
    set({ userInputSentence: newUserInputSentence })
  },
}))