import { headers } from 'next/headers';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['es', 'en'];
const defaultLocale = 'es';
const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  'en-US': () => import('./en.json').then((module) => module.default),
  'es-ES': () => import('./es.json').then((module) => module.default),
};

export const getLang = (): string => {
  const headersList = headers();
  const languages = new Negotiator({
    headers: { 'accept-language': headersList.get('Accept-Language') || '' },
  }).languages();
  return match(languages || [], locales, defaultLocale);
};

export const getDictionary = async (
  locale: string
): Promise<{ [key: string]: any }> => {
  if (locale === 'en') return dictionaries['en']();
  else return dictionaries['es']();
};
