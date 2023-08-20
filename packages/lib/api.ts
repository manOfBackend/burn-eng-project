import { http } from './http';
import { WordPage } from './types';

export function getWordPage({ page, size }: { page: number, size: number }) {
  return http.get<WordPage>('https://zammanvoca.fly.dev/words/english', { params: { page, size } });
}