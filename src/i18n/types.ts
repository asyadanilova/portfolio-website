// i18n types
export interface TranslationResources {
  general: {
    title: string;
    welcome: string;
    description: string;
    services: string;
    contact: string;
    about: string;
    language: string;
  };
}

export type LanguageCode = 'en' | 'ru';

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}