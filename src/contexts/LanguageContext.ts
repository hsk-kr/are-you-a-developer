import { createContext } from "react";

export type Language = {
  title: string;
  menuStart: string;
  menuHistory: string;
  menuSetting: string;
  backButton: string;
  changeLanguage: string;
  notSupported: string;
  resultTitle: string;
  numberOfTotalQuestions: string;
  numberOfCorrectAnswers: string;
  numberOfIncorrectAnswers: string;
  perfectScoreTitle: string;
  goodSCoreTitle: string;
  badScoreTitle: string;
  redirectToMain: string;
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
    changeLanguage: "언어 변경",
    notSupported: "아직 지원하지 않습니다.",
    resultTitle: "문제 결과",
    numberOfTotalQuestions: "총 문제 횟수",
    numberOfCorrectAnswers: "맞은 문제 횟수",
    numberOfIncorrectAnswers: "틀린 문제 횟수",
    perfectScoreTitle: "안녕하세요! 개발자님!",
    goodSCoreTitle: "ㅋㅋㅋㅋㅋㅋㅋㅋ개발자는 아니고 뉘신지",
    badScoreTitle: "ㅋㅋㅋㅋ 문과는 가라",
    redirectToMain: "시작화면으로"
  },
  en: {
    title: "Are you a developer?",
    menuStart: "START",
    menuHistory: "HISTORY",
    menuSetting: "SETTING",
    backButton: "BACK",
    changeLanguage: "Change Language",
    notSupported: "Not supported yet.",
    resultTitle: "Result",
    numberOfTotalQuestions: "Number of questions",
    numberOfCorrectAnswers: "Number of correct answers",
    numberOfIncorrectAnswers: "Nubmer of incorrect answers",
    perfectScoreTitle: "Hi! Developer!",
    goodSCoreTitle: "?? Why did you take this test? get out of here.",
    badScoreTitle: "Go away. Don't take this test anymore.",
    redirectToMain: "To Main"
  }
};

export const defaultLanguageContext: LanguageContextType = {
  lang: "ko",
  setLang: (lang: keyof Languages) => {}
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);
