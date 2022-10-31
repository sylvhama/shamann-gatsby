import React, { useEffect, useState } from 'react';
import * as styles from './Split.module.css';
import classNames from 'classnames';

export function Split({ text }) {
  const [isWindowDefined, setIsWindowDefined] = useState(false);

  useEffect(() => {
    setIsWindowDefined(true);
  }, []);

  const isAnimatable =
    isWindowDefined &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  return (
    <div
      className={classNames(styles.Text, !isWindowDefined && styles.Invisible)}
      aria-hidden
    >
      {isAnimatable
        ? text.split('').map((char, index) => {
            return (
              <span
                style={{ '--index': index }}
                className={classNames(styles.Char, styles.Sliding)}
                key={index}
              >
                <span
                  className={classNames(styles.Char, styles.Rainbow)}
                  key={index}
                >
                  {char}
                </span>
              </span>
            );
          })
        : text}
    </div>
  );
}
