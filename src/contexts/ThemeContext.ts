import { createContext } from "react";

const setCSSVariables = (themeName: keyof Themes) => {
  for (const value in theme[themeName]) {
    const key: keyof Theme = value as keyof Theme;
    document.documentElement.style.setProperty(
      `--${key}`,
      theme[themeName][key]
    );
  }
};

export type Theme = {
  menuLabelBackgroundColor: string;
  menuLabelColor: string;
  menuLabelActiveColor: string;
};

export type Themes = {
  white: Theme;
};

export type ThemeContextType = {
  themeName: keyof Themes;
  setTheme: (themeName: keyof Themes) => void;
};

export const theme: Themes = {
  white: {
    menuLabelBackgroundColor: "#ecf0f1",
    menuLabelColor: "#ffffff",
    menuLabelActiveColor: "#a4b0be"
  }
};

export const defaultThemeContext: ThemeContextType = {
  themeName: "white",
  setTheme: (themeName: keyof Themes) => {
    setCSSVariables(themeName);
  }
};

export const ThemeContext = createContext<ThemeContextType>(
  defaultThemeContext
);
