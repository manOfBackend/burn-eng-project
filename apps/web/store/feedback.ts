import { InputSentence, SentenceProblemResponse, SentenceResponse } from '@sayvoca/lib'
import { create } from 'zustand'

type Feedback = Partial<SentenceResponse> & {
  userInputSentence?: InputSentence;
  problem?: SentenceProblemResponse;
}
type FeedbackStore = Feedback & {
  setUserInputSentence: (sentence: InputSentence) => void
  addFeedback: (feedback: SentenceResponse) => void
  setProblem: (problem: SentenceProblemResponse) => void
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  addFeedback: (feedback) => set(feedback),
  setProblem: (problem) => set({ problem }),
  setUserInputSentence: (userInputSentence) => set({ userInputSentence }),
}))