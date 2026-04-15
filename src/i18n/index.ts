import { ru } from './ru';
import { tt } from './tt';
export type Lang = 'ru' | 'tt';
export type TranslationKey = keyof typeof ru;
export const translations = { ru, tt } as const;
export function t(lang: Lang, key: TranslationKey): string {
  return (translations[lang] as Record<string, string>)[key] ?? translations['ru'][key] ?? key;
}
export function getLangFromUrl(url: URL): Lang {
  const path = url.pathname;
  if (path.startsWith('/tt')) return 'tt';
  return 'ru';
}
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'tt') {
    return path.startsWith('/tt') ? path : '/tt' + path;
  } else {
    return path.startsWith('/tt') ? path.replace('/tt', '') || '/' : path;
  }
}