import React from 'react';

import * as styles from './Anchor.module.css';

export function Anchor({ children, ...props }) {
  return (
    <a className={styles.Anchor} {...props}>
      {children}
    </a>
  );
}
