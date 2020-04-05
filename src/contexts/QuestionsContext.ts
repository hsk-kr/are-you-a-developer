import { createContext } from "react";

export type Question = {
  question: string;
  answerList: Array<string>;
  answerIdx: number;
};

export type Questions = {
  ko: Question[];
  en: Question[];
};

export type QuestionsContextType = {
  currentQuestionIdx: number;
  changeIdxRandomly: Function;
};

export const questions: Questions = {
  ko: [
    {
      question: "다음 중 FIFO 자료구조로 옳은 것은?",
      answerList: ["스택", "큐", "트리", "해쉬"],
      answerIdx: 1
    },
    {
      question: "다음 중 비관계형 데이터베이스는?",
      answerList: ["Mysql", "MariaDB", "MongoDB", "Mssql"],
      answerIdx: 2
    },
    {
      question: "다음 중 일반적으로 가장 빠른 정렬 알고리즘은?",
      answerList: ["버블정렬", "퀵정렬", "셀정렬", "선택정렬"],
      answerIdx: 1
    },
    {
      question: "실행중인 프로그램을 말하는 용어는?",
      answerList: ["프로세스", "운영체제", "페이징", "쉘"],
      answerIdx: 0
    },
    {
      question:
        "동일한 자원을 동시에 접근하는 작업을 실행하는 코드 영역을 말한다.",
      answerList: ["임계영역", "힙영역", "스택영역", "데이터영역"],
      answerIdx: 0
    },
    {
      question:
        "세마포가 Ready Queue 를 가지고 있고, 둘 이상의 프로세스가 Critical Section 진입을 무한정 기다리고 있고, Critical Section 에서 실행되는 프로세스는 진입 대기 중인 프로세스가 실행되야만 빠져나올 수 있는 상황을 지칭한다.",
      answerList: ["교착상태", "진입불가상태", "대기상태", "점유상태"],
      answerIdx: 0
    }
  ],
  en: [
    {
      question: "Which one is the FIFO structure?",
      answerList: ["Stack", "Queue", "Tree", "Hash"],
      answerIdx: 1
    },
    {
      question: "Which one is Non-SQL Database?",
      answerList: ["Mysql", "MariaDB", "MongoDB", "Mssql"],
      answerIdx: 2
    },
    {
      question: "Which one is fastest sort algorithm in general?",
      answerList: ["Bubble Sort", "Quick Sort", "Shell Sort", "Selection Sort"],
      answerIdx: 2
    },
    {
      question:
        "[] is the instance of a computer program that is being executed by one or many threads.",
      answerList: ["Process", "Operation System", "Paging", "Shell"],
      answerIdx: 0
    },
    {
      question:
        "In concurrent programming, concurrent accesses to shared resources can lead to unexpected or erroneous behavior, so parts of the program where the shared resource is accessed need to be protected in ways that avoid the concurrent access. This protected section is the []",
      answerList: [
        "Critical Section",
        "Heap Section",
        "Stack Section",
        "Data Section"
      ],
      answerIdx: 0
    },
    {
      question:
        "In concurrent computing, [] is a state in which each member of a group is waiting for another member, including itself, to take action, such as sending a message or more commonly releasing a lock.",
      answerList: ["Dead Lock", "Wait State", "Occupancy State", "Access Lock"],
      answerIdx: 0
    }
  ]
};

export const defaultQuestionsContext: QuestionsContextType = {
  currentQuestionIdx: 0,
  changeIdxRandomly: () => {}
};

export const QuestionsContext = createContext<QuestionsContextType>(
  defaultQuestionsContext
);
