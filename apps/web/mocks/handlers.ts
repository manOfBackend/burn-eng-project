import { SentenceResponse } from '@sayvoca/lib'
import { rest } from 'msw'

export const handlers = [
  rest.post('/translated-feedback', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        meaningAccuracy: 30,
        grammarAccuracy: 50,
        naturalness: 70,
        overallEvaluationScore: 80,
        advice: '더 분발하세요',
        betterTanslatedSentences: ['Test Sentence', 'Test Sentence 2'],
      })
    )
  }),
  rest.get('/sentence/random', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          "id": 0,
          "createdAt": 0,
          "updatedAt": 0,
          "deletedAt": 0,
          "enable": true,
          "language": "KOREAN",
          "sentence": "나는 맛있는 사과다.",
          "level": 2
        }
      ))
  }),
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          "email": "aaa@aa.com",
          "role": "ADMIN",
          "recentLevelHistories": {
            "additionalProp1": 0,
            "additionalProp2": 0,
            "additionalProp3": 0
          },
          "level": 5,
          "exp": 0
        }
      ))
  })
]