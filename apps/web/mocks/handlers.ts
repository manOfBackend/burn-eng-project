import { SentenceResponse } from '@sayvoca/lib'
import { rest } from 'msw'

export const handlers = [
  rest.post('/translated-feedback', (req, res, ctx) => {
    return res(
      ctx.json({
        meaningAccuracy: 30,
        grammarAccuracy: 50,
        naturalness: 70,
        overallEvaluationScore: 80,
        advice: '더 분발하세요',
        betterTanslatedSentences: ['Test Sentence'],
      })
    )
  })

]