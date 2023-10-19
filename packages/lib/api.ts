import { InputSentence, Sentence, SentencePage, SentenceResponse } from '../lib/types';
import { http } from './http';

export function getSentencePage({ page, size }: { page: number, size: number }) {
  return http.get<SentencePage>('/admin/sentence', { params: { page, size } });
}

export function addSentence({ language, sentence }: InputSentence) {
  return http.post<Sentence>('/admin/sentence', { language, sentence });
}

export function submitWriting({ sentenceId, translatedLanguage, translatedSentence }: { translatedLanguage: string, translatedSentence: string, sentenceId: number }) {
  return http.post<SentenceResponse>('/translated-feedback', { translatedLanguage, translatedSentence, sentenceId });
}

export function searchSentence({ search }: { search: string }) {
  return http.post<Sentence[]>('/admin/sentence/search', { search });
}