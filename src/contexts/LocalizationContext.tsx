import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { translations } from '../translations';

type LanguageCode = keyof typeof translations;
type Translations = typeof translations[LanguageCode];

interface LocalizationContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: Translations;
  supportedLanguages: { code: LanguageCode; name: string }[];
}

const supportedLanguages: { code: LanguageCode; name: string }[] = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
];

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('pt');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LanguageCode;
    if (supportedLanguages.some(lang => lang.code === browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  const t = translations[language];

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t, supportedLanguages }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
