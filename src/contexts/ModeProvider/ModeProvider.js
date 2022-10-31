import React, { useEffect, useState } from 'react';

export const ModeContext = React.createContext();

const isWindowDefined = typeof window !== 'undefined';

const metaThemeColor =
  isWindowDefined && window.document.querySelector('meta[name=theme-color]');
const loadedMode = isWindowDefined ? window.getThemeMode() : 'dark';
const root = isWindowDefined && document.documentElement;

export function ModeProvider({ children }) {
  const [isDark, setIsDark] = useState(loadedMode === 'dark');
  useEffect(() => {
    if (isWindowDefined) {
      const nextMode = isDark ? 'dark' : 'light';
      window.localStorage.setItem('mode', nextMode);
      const colors = window.THEME_COLORS;
      metaThemeColor.setAttribute('content', colors[nextMode].background);
      root.style.setProperty('--text-color', colors[nextMode].text);
      root.style.setProperty('--background-color', colors[nextMode].background);
    }
  }, [isDark]);
  return (
    <ModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ModeContext.Provider>
  );
}
