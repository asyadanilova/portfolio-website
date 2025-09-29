import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enGeneral from './locales/en/General/General.json';
import ruGeneral from './locales/ru/General/General.json';

export type SupportedLanguages = 'en' | 'ru';

const resources = {
  en: {
    general: enGeneral,
  },
  ru: {
    general: ruGeneral,
  },
};

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en' as SupportedLanguages, // Default language if detection fails
    debug: process.env.NODE_ENV === 'development',

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Default namespace
    ns: ['general'],
    defaultNS: 'general',
  });

export default i18n;