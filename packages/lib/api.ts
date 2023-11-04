import { InputSentence, Sentence, SentenceHistoryDatesResponse, SentenceHistoryResponse, SentencePage, SentenceProblemResponse, SentenceResponse, UserInfoResponse } from '../lib/types';
import { http } from './http';

export function getSentencePage({ page, size }: { page: number, size: number }) {
  return http.get<SentencePage>('/admin/sentence', { params: { page, size } });
}

export function addSentence({ language, sentence }: InputSentence) {
  return http.post<Sentence>('/admin/sentence', { language, sentence });
}

export function editSentence({ enable, id, language, level, sentence }: Pick<Sentence, 'id' | 'enable' | 'language' | 'sentence' | 'level'>) {
  return http.put<void>(`/admin/sentence`, { enable, id, language, level, sentence });
}

export function deleteSentence(sentenceId: Sentence['id']) {
  return http.delete<void>(`/admin/sentence/${sentenceId}`);
}

export function submitWriting({ sentenceId, translatedLanguage, translatedSentence }: { translatedLanguage: string, translatedSentence: string, sentenceId: number }) {
  return http.post<SentenceResponse>('/translated-feedback', { translatedLanguage, translatedSentence, sentenceId });
}

export function searchSentence({ search }: { search: string }) {
  return http.post<Sentence[]>('/admin/sentence/search', { search });
}

export function getSentenceProblem({ level }: { level?: number } = {}) {
  return http.get<SentenceProblemResponse>(`/sentence/random`, { params: { level } });
}

export function getHistoryDates({ languageFrom, languageTo, month, year }: { year: number, month: number, languageFrom: Sentence['language'], languageTo: Sentence['language'] }) {
  return http.get<SentenceHistoryDatesResponse>(`/translated/history/dates`, { params: { languageFrom, languageTo, month, year } });
}

export function getSentenceProblemHistory({ date, languageFrom, languageTo }: { date: string, languageFrom: string, languageTo: string }) {
  return http.get<SentenceHistoryResponse>('/translated/history', { params: { languageFrom, languageTo, date } });
}

export function getUserInfo() {
  return http.get<UserInfoResponse>(`/users`);
}