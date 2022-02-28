import React, { createContext } from "react";
import useToggeState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggeState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
