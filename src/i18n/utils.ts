import i18n from './index';
import { SupportedLanguages } from './index';

export interface Language {
  code: SupportedLanguages;
  name: string;
  flag: string;
}

/**
 * Get the current language code
 */
export const getCurrentLanguage = (): SupportedLanguages => {
  return (i18n.language as SupportedLanguages) || 'en';
};

/**
 * Get available languages
 */
export const getAvailableLanguages = (): Language[] => {
  return [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];
};

/**
 * Check if a language is supported
 */
export const isLanguageSupported = (langCode: string): langCode is SupportedLanguages => {
  const supportedLanguages = getAvailableLanguages().map(lang => lang.code);
  return supportedLanguages.includes(langCode as SupportedLanguages);
};

/**
 * Get language direction (for RTL languages in the future)
 */
export const getLanguageDirection = (langCode: SupportedLanguages = getCurrentLanguage()): 'ltr' | 'rtl' => {
  // Add RTL languages here when needed
  const rtlLanguages: SupportedLanguages[] = [];
  return rtlLanguages.includes(langCode) ? 'rtl' : 'ltr';
};

/**
 * Format number according to current locale
 */
export const formatNumber = (number: number, options: Intl.NumberFormatOptions = {}): string => {
  const locale = getCurrentLanguage() === 'ru' ? 'ru-RU' : 'en-US';
  return new Intl.NumberFormat(locale, options).format(number);
};

/**
 * Format date according to current locale
 */
export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = {}): string => {
  const locale = getCurrentLanguage() === 'ru' ? 'ru-RU' : 'en-US';
  return new Intl.DateTimeFormat(locale, options).format(date);
};