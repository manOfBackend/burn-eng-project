import { SentenceResponse } from '@sayvoca/lib'
import { rest } from 'msw'

export const handlers = [
  rest.post('/translated-feedback', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        meaningAccuracy: 30,
        grammarAccuracy: 50,
        naturalness: 70,
        overallEvaluationScore: 80,
        advice: '더 분발하세요',
        betterTanslatedSentences: ['Test Sentence', 'Test Sentence 2'],
        feedbackResult: 'PASS',
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
  rest.get('/translated/history/dates', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          dates: [
            "2023-11-26",
            "2023-11-27",
            "2023-12-01",
          ]
        }
      ))
  }),
  rest.get('/translated/history', (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {
            sentence: '나는 맛있는 사과다.',
            translatedSentence: 'I am an apple.',
            translatedFeedback: {
              meaningAccuracy: 30,
              grammarAccuracy: 50,
              naturalness: 70,
              overallEvaluationScore: 80,
              advice: '더 분발하세요 더 분발하세요 더 분발하세요 더 분발하세요 더 분발하세요 더 분발하세요 더 분발하세요',
              betterTanslatedSentences: ['Test Sentence', 'Test Sentence 2'],
              feedbackResult: 'PASS',
            }
          },
          {
            sentence: '나는 맛있는 사과를 먹었다.',
            translatedSentence: 'I ate an apple.',
            translatedFeedback: {
              meaningAccuracy: 30,
              grammarAccuracy: 50,
              naturalness: 70,
              overallEvaluationScore: 80,
              advice: '더 분발하세요',
              betterTanslatedSentences: ['Test Sentence', 'Test Sentence 2'],
              feedbackResult: 'PASS',
            }
          }
        ]
      ))
  }),
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json(
        {
          "email": "aaa@aa.com",
          "role": "ADMIN",
          "recentUserLevelHistories": [
            {
              date: '2023-11-01',
              level: 1,
            },
            {
              date: '2023-11-05',
              level: 2,
            },
            {
              date: '2023-11-03',
              level: 3,
            },
            {
              date: '2023-11-04',
              level: 4,
            },
          ],
          "level": 5,
          "exp": 0
        }
      ))
  })
]