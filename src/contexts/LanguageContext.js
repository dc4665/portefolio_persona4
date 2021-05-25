import { createContext } from 'react'

export const LanguageContext = createContext({
    language: navigator.language,
    setLanguage: () => {}
});