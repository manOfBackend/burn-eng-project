import { InputSentence, Sentence, SentenceHistoryDatesResponse, SentenceHistoryResponse, SentenceLevelResponse, SentencePage, SentenceProblemResponse, SentenceResponse, SubmitDailyGoalResponse, UserInfoResponse } from '../lib/types';
import { http, httpWithAuth } from './http';

export function getSentencePage({ page, size }: { page: number, size: number }) {
  return httpWithAuth.get<SentencePage>('/admin/sentences', { params: { page, size } });
}

export function getSentenceLevelCount() {
  return httpWithAuth.get<SentenceLevelResponse>('/admin/level-to-sentence-counts');
}

export function addSentence({ language, sentence }: InputSentence) {
  return httpWithAuth.post<Sentence>('/admin/sentences', { language, sentence });
}

export function editSentence({ enable, id, language, level, sentence }: Pick<Sentence, 'id' | 'enable' | 'language' | 'sentence' | 'level'>) {
  return httpWithAuth.put<void>(`/admin/sentences`, { enable, id, language, level, sentence });
}

export function deleteSentence(sentenceId: Sentence['id']) {
  return httpWithAuth.delete<void>(`/admin/sentences/${sentenceId}`);
}

export function submitWriting({ sentenceId, translatedLanguage, translatedSentence }: { translatedLanguage: string, translatedSentence: string, sentenceId: number }) {
  return httpWithAuth.post<SentenceResponse>('/translated/feedback', { translatedLanguage, translatedSentence, sentenceId });
}

export function submitGuestWriting({ sentenceId, translatedLanguage, translatedSentence }: { translatedLanguage: string, translatedSentence: string, sentenceId: number }) {
  return http.post<SentenceResponse>('/translated/feedback', { translatedLanguage, translatedSentence, sentenceId });
}

export function searchSentence({ search }: { search: string }) {
  return httpWithAuth.post<Sentence[]>('/admin/sentences/search', { search });
}

export function getSentenceProblem({ level }: { level?: number } = {}) {
  return httpWithAuth.get<SentenceProblemResponse>(`/sentence/random`, { params: { level } });
}

export function getGuestSentenceProblem({ level }: { level?: number } = {}) {
  return http.get<SentenceProblemResponse>(`/sentence/random`, { params: { level } });
}

export function getHistoryDates({ languageFrom, languageTo, month, year }: { year: number, month: number, languageFrom: Sentence['language'], languageTo: Sentence['language'] }) {
  return httpWithAuth.get<SentenceHistoryDatesResponse>(`/translated/history/dates`, { params: { languageFrom, languageTo, month, year } });
}

export function getSentenceProblemHistory({ date, languageFrom, languageTo }: { date: string, languageFrom: string, languageTo: string }) {
  return httpWithAuth.get<SentenceHistoryResponse>('/translated/history', { params: { languageFrom, languageTo, date } });
}

export function submitUserDailyGoal({ goal }: { goal: number }) {
  return httpWithAuth.put<SubmitDailyGoalResponse>('/user-daily-goal', { goal });
}

export function getUserInfo() {
  return httpWithAuth.get<UserInfoResponse>(`/users`);
}