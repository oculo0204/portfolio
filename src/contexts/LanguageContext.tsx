import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../constants/translations';

type LangType = 'KR' | 'EN';

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: typeof translations.KR;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LangType>('KR');
  const t = translations[lang];

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider 내에서 사용해야 합니다.');
  return context;
};
