import { createContext } from "react";

export type Language = {
  title: string;
  menuStart: string;
  menuHistory: string;
  menuSetting: string;
  backButton: string;
  changeLanguage: string;
};

export type Languages = {
  ko: Language;
  en: Language;
};

export type LanguageContextType = {
  lang: keyof Languages;
  setLang: (lang: keyof Languages) => void;
};

export const languages: Languages = {
  ko: {
    title: "당신... 개발자입니까?",
    menuStart: "시작",
    menuHistory: "플레이 내역",
    menuSetting: "설정",
    backButton: "뒤로가기",
    changeLanguage: "언어 변경"
  },
  en: {
    title: "Are you a developer?",
    menuStart: "START",
    menuHistory: "HISTORY",
    menuSetting: "SETTING",
    backButton: "BACK",
    changeLanguage: "Change Language"
  }
};

export const defaultLanguageContext: LanguageContextType = {
  lang: "ko",
  setLang: (lang: keyof Languages) => {}
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);
