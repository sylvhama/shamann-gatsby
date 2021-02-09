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

export default ({ children }) => {
  const [isDark, setIsDark] = useState(getMode() === 'dark');
  useEffect(
    () => {
      if (isWindowDefined) {
        window.localStorage.setItem('mode', isDark ? 'dark' : 'light');
      }
    },
    [isDark]
  );
  return (
    <ModeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};
