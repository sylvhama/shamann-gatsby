import React from 'react';
import { useLocation } from '@reach/router';
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

  const frenchUrl = useFrenchUrl();

  if (typeof window === 'undefined') return null;

  return (
    <aside className={styles.Aside} aria-label="Change mode or language">
      <Anchor href={frenchUrl}>Français</Anchor>
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

function useFrenchUrl() {
  const location = useLocation();
  const currentPathname = location.pathname;

  const base = 'https://shamann.fr';
  let pathname = '';

  switch (currentPathname) {
    case '/relevant-experience':
      pathname = '/parcours';
      break;
    case '/showcase':
      pathname = '/vitrine';
      break;
    case '/articles-talks':
      pathname = '/articles-presentations';
      break;
    default:
      break;
  }

  return base + pathname;
}
