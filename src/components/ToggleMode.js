import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import { createGlobalStyle } from 'styled-components';

import { ModeContext } from './ThemeProvider';

const ToggleStyle = createGlobalStyle`
  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    border: 1px solid var(--text-color);
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: var(--background-color);
    transition: all 0.2s ease;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: var(--background-color);
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid var(--text-color);
    border-radius: 50%;
    background-color: var(--background-color);

    box-sizing: border-box;

    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
  }

  .react-toggle--focus .react-toggle-thumb {
    box-shadow: 0px 0px 2px 3px ${(props) => props.theme.color.blue};
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: 0px 0px 5px 5px ${(props) => props.theme.color.blue};
  }

  .react-toggle {
    .icon {
      position: absolute;
      top: 50%;
      margin-top: -0.5rem;
      width: 1rem;
      height: 1rem;
      text-align: center;
      line-height: 1;
      font-size: 1rem;
    }
  }
`;

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

export default function ToogleMode() {
  const { isDark, setIsDark } = useContext(ModeContext);

  if (typeof window === 'undefined') return null;

  return (
    <aside aria-label="Choose between dark and light mode">
      <ToggleStyle />
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
