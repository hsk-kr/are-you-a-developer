import { createContext } from "react";

export type Language = {
    title: string;
    menuStart: string;
    menuHistory: string;
    menuSetting: string;
};

export type Languages = {
    ko: Language,
    en: Language
};

export type LanguageContextType = {
    lang: keyof Languages
}

export const languages: Languages = {
    ko: {
        title: "당신... 개발자입니까?",
        menuStart: "시작",
        menuHistory: "플레이 내역",
        menuSetting: "설정"
    },
    en: {
        title: "Are you a developer?",
        menuStart: "START",
        menuHistory: "HISTORY",
        menuSetting: "SETTING"
    }
};

export const defaultLanguageContext: LanguageContextType = {
    lang: "ko"
};

export const LanguageContext = createContext<LanguageContextType>(
    defaultLanguageContext
  );
  