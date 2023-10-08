import React from 'react';
import Toggle from 'react-toggle';
import { useMode } from 'hooks/useMode';
import { Anchor } from 'components/shared/Anchor';

import * as styles from './ToggleMode.module.css';
import './global.css';

const Melt = () => (
  <span
    style={{ right: '0.025rem' }}
    className="icon"
    role="img"
    aria-label="Melting Face emoji representing light mode"
  >
    🫠
  </span>
);

const Vampire = () => (
  <span
    className="icon"
    role="img"
    aria-label="Vampire emoji representing dark mode"
  >
    🧛
  </span>
);

export function ToggleMode() {
  const { isDark, setIsDark } = useMode();

  if (typeof window === 'undefined') return null;

  return (
    <aside className={styles.Aside} aria-label="Change mode or language">
      <Anchor href="https://shamann.fr">Français</Anchor>
      <Toggle
        aria-label={`Switch from ${isDark ? 'dark' : 'light'} mode to ${
          isDark ? 'light' : 'dark'
        } mode`}
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        icons={{
          checked: <Vampire />,
          unchecked: <Melt />,
        }}
      />
    </aside>
  );
}
