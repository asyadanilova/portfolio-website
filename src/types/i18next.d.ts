import 'react-i18next';

// Import your translation resources
import enGeneral from './i18n/locales/en/General/General.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'general';
    resources: {
      general: typeof enGeneral;
    };
  }
}