import React from 'react';
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { SupportedLanguages } from '../i18n';

interface UseTranslationReturn {
  t: (key: string, options?: any) => string;
  i18n: any;
  currentLanguage: string;
  changeLanguage: (lang: SupportedLanguages) => Promise<any>;
  isLanguage: (lang: SupportedLanguages) => boolean;
}


export const useTranslation = (namespace: string = 'general'): UseTranslationReturn => {
  const { t, i18n } = useI18nTranslation(namespace);

  return {
    t,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage: (lang: SupportedLanguages) => i18n.changeLanguage(lang),
    isLanguage: (lang: SupportedLanguages) => i18n.language === lang,
  };
};

export const withTranslation = <P extends object>(
  Component: React.ComponentType<P & UseTranslationReturn>,
  namespace: string = 'general'
): React.FC<P> => {
  return (props: P) => {
    const translationProps = useTranslation(namespace);
    return React.createElement(Component, { ...props, ...translationProps });
  };
};