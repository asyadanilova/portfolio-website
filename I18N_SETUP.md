# Internationalization (i18n) Setup

This project uses `react-i18next` for internationalization support with automatic language detection and localStorage persistence. **All components are built with TypeScript (TSX) for type safety.**

## Features

- ✅ Automatic language detection from browser preferences
- ✅ Language persistence in localStorage
- ✅ Support for English and Russian languages
- ✅ Custom hooks for easy translation usage
- ✅ Language switcher component
- ✅ Utility functions for number and date formatting
- ✅ **Full TypeScript support with type definitions**

## File Structure

```
src/
├── i18n/
│   ├── index.ts          # Main i18n configuration (TypeScript)
│   ├── types.ts          # TypeScript type definitions
│   ├── utils.ts          # Utility functions for formatting (TypeScript)
│   └── locales/
│       ├── en/
│       │   └── General/
│       │       └── General.json
│       └── ru/
│           └── General/
│               └── General.json
├── components/
│   └── LanguageSwitcher/
│       └── LanguageSwitcher.tsx  # TypeScript React component
├── hooks/
│   └── useTranslation.ts         # Custom translation hook (TypeScript)
└── types/
    ├── json.d.ts                 # JSON module declarations
    └── i18next.d.ts             # i18next type augmentation
```

## Usage

### Basic Translation

```tsx
import React from 'react';
import { useTranslation } from './hooks/useTranslation';

const MyComponent: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};
```

### Language Switching

```tsx
import React from 'react';
import { useTranslation } from './hooks/useTranslation';
import { SupportedLanguages } from './i18n';

const MyComponent: React.FC = () => {
  const { changeLanguage, currentLanguage } = useTranslation();
  
  const handleLanguageChange = (lang: SupportedLanguages): void => {
    changeLanguage(lang);
  };
  
  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('ru')}>Русский</button>
    </div>
  );
};
```

### Using the Language Switcher Component

```tsx
import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

const App: React.FC = () => {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your app content */}
    </div>
  );
};
```

### Formatting Numbers and Dates

```jsx
import { formatDate, formatNumber } from './i18n/utils';

const date = new Date();
const number = 1234.56;

// Formats according to current locale
const formattedDate = formatDate(date, { year: 'numeric', month: 'long', day: 'numeric' });
const formattedNumber = formatNumber(number, { minimumFractionDigits: 2 });
```

## Adding New Translations

1. Add new keys to the appropriate JSON files:

**src/i18n/locales/en/General/General.json:**
```json
{
  "title": "'Fast As Wind' - Corporate Transportation",
  "newKey": "Your English translation"
}
```

**src/i18n/locales/ru/General/General.json:**
```json
{
  "title": "'Быстрее ветра' - Корпоративные перевозки",
  "newKey": "Ваш русский перевод"
}
```

2. Use the new key in your components:
```jsx
const { t } = useTranslation();
return <span>{t('newKey')}</span>;
```

## Adding New Languages

1. Create a new folder in `src/i18n/locales/` (e.g., `de/`)
2. Add translation files following the same structure
3. Update the resources object in `src/i18n/index.js`
4. Update the languages array in `src/components/LanguageSwitcher/LanguageSwitcher.jsx`

## Adding New Namespaces

1. Create new JSON files in the language folders
2. Import them in `src/i18n/index.js`
3. Add them to the resources object
4. Use with the namespace parameter: `useTranslation('yourNamespace')`

## Configuration Options

The i18n configuration in `src/i18n/index.js` includes:

- **fallbackLng**: Default language ('en')
- **debug**: Enabled in development mode
- **detection**: Language detection order and caching
- **interpolation**: React-specific settings

## Browser Support

The language detection supports:
- localStorage (primary)
- Browser navigator language
- HTML lang attribute

The selected language is automatically saved to localStorage for persistence across sessions.