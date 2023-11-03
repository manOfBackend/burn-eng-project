import { SentenceResponse } from '@sayvoca/lib'
import { create } from 'zustand'

type FeedbackStore = SentenceResponse & {
  addFeedback: (feedback: SentenceResponse) => void
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  addFeedback: (feedback) => set(feedback),
  advice: '',
  betterTranslatedSentences: [],
  grammarAccuracy: 0,
  meaningAccuracy: 0,
  naturalness: 0,
  overallEvaluationScore: 0,
  feedbackResult: 'FAIL',
}))