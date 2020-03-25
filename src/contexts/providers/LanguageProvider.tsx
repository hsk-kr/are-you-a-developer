import React, { useState } from "react";
import {
  Languages,
  LanguageContext,
  LanguageContextType,
  defaultLanguageContext
} from "../LanguageContext";

interface Props {
  children: React.ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [langCtx, setLangCtx] = useState<LanguageContextType>(
    defaultLanguageContext
  );

  // TODO: It has to be changed...
  const value = {
    ...langCtx,
    setLang: (lang: keyof Languages) => {
      setLangCtx({
        ...langCtx,
        lang
      });
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
