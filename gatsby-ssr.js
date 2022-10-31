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
      background: '#212121',
      text: '#f1f1f1',
      link: '#03a9f4',
      linkHover: '#b3e5fc',
    },
    light: {
      background: '#f1f1f1',
      text: '#212121',
      link: '#0274a7',
      linkHover: '#58707c',
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
