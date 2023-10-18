import { InputSentence, Sentence, SentencePage, SentenceResponse } from '../lib/types';
import { http } from './http';

export function getSentencePage({ page, size }: { page: number, size: number }) {
  return http.get<SentencePage>('https://zammanvoca-api.m0n5t3r.com/admin/sentence', { params: { page, size } });
}

export function addSentence({ language, sentence }: InputSentence) {
  return http.post<Sentence>('https://zammanvoca-api.m0n5t3r.com/admin/sentence', { language, sentence });
}

export function submitWriting({ sentenceId, translatedLanguage, translatedSentence }: { translatedLanguage: string, translatedSentence: string, sentenceId: number }) {
  return http.post<SentenceResponse>('https://zammanvoca-api.m0n5t3r.com/translated-feedback', { translatedLanguage, translatedSentence, sentenceId });
}

export function searchSentence({ search }: { search: string }) {
  return http.post<Sentence[]>('https://zammanvoca-api.m0n5t3r.com/admin/sentence/search', { search });
}