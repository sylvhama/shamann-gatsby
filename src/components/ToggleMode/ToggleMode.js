import React from 'react';
import Toggle from 'react-toggle';
import { useMode } from 'hooks/useMode';

import './global.css';

const Sun = () => (
  <span
    style={{ right: '0.025rem' }}
    className="icon"
    role="img"
    aria-label="Sun emoji representing light mode"
  >
    🌞
  </span>
);

const Moon = () => (
  <span
    className="icon"
    role="img"
    aria-label="Moon emoji representing dark mode"
  >
    🌜
  </span>
);

export function ToggleMode() {
  const { isDark, setIsDark } = useMode();

  if (typeof window === 'undefined') return null;

  return (
    <aside aria-label="Choose between dark and light mode">
      <Toggle
        aria-label={`Switch from ${isDark ? 'dark' : 'light'} mode to ${
          isDark ? 'light' : 'dark'
        } mode`}
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        icons={{
          checked: <Moon />,
          unchecked: <Sun />,
        }}
      />
    </aside>
  );
}
