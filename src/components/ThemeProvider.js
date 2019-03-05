import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

export const ModeContext = React.createContext();

const getMode = () => localStorage.getItem('mode') || 'dark';

const metaThemeColor =
  window && window.document.querySelector('meta[name=theme-color]');

export default ({ children }) => {
  const [isDark, setIsDark] = useState(getMode() === 'dark');
  useEffect(
    () => {
      localStorage.setItem('mode', isDark ? 'dark' : 'light');
      metaThemeColor &&
        metaThemeColor.setAttribute(
          'content',
          theme(isDark).modeColors.background
        );
    },
    [isDark]
  );
  return (
    <ModeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={theme(isDark)}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};
