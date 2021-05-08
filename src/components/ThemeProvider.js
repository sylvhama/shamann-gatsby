import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export const ModeContext = React.createContext();

const isWindowDefined = typeof window !== 'undefined';

const getMode = () => {
  if (isWindowDefined) {
    const savedMode = window.localStorage.getItem('mode');
    if (savedMode) return savedMode;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches)
      return 'light';
  }
  return 'dark';
};

const metaThemeColor =
  isWindowDefined && window.document.querySelector('meta[name=theme-color]');

export default function MyThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getMode() === 'dark');
  useEffect(
    () => {
      if (isWindowDefined) {
        window.localStorage.setItem('mode', isDark ? 'dark' : 'light');
        metaThemeColor.setAttribute(
          'content',
          theme(isDark).modeColors.background
        );
      }
    },
    [isDark]
  );
  return (
    <ModeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
}
