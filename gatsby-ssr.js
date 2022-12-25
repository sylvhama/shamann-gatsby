import React from 'react';
import { wrapRootElement as exportMeAsWrapRootElement } from 'wrappers';
export { wrapPageElement } from 'wrappers';

// The build is failing if we directly export like we do with wrapPageElement
export const wrapRootElement = exportMeAsWrapRootElement;

const ThemeScript = () => {
  let codeToRunOnClient = `
  function getThemeMode() {
    const savedMode = window.localStorage.getItem('mode');
    if (savedMode) return savedMode;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches)
      return 'light';
    return 'dark';
  }
  window.THEME_COLORS = {
    dark: {
      background: '#1d1e26',
      text: '#f8f8f2',
      link: '#80ffea',
      linkHover: '#ff80bf',
    },
    light: {
      background: '#ffffff',
      text: '#1d1e26',
      link: '#7357ff',
      linkHover: '#ff80bf',
    },
  };
  
  (function () {
    const mode = getThemeMode();
    const colors = window.THEME_COLORS;
    const root = document.documentElement;
    root.style.setProperty('--text-color', colors[mode].text);
    root.style.setProperty('--background-color', colors[mode].background);
    root.style.setProperty('--link-color', colors[mode].link);
    root.style.setProperty('--link-color-hover', colors[mode].linkHover);
  })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScript key="ThemeScript" />);
};
