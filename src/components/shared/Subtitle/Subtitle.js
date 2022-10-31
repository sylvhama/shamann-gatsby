import React from 'react';

import * as styles from './Subtitle.module.css';

export function Subtitle({ children, ...props }) {
  return (
    <h2 className={styles.Subtitle} {...props}>
      {children}
    </h2>
  );
}
