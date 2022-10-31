import React from 'react';

import * as styles from './Title.module.css';

export function Title({ children, ...props }) {
  return (
    <h1 className={styles.Title} {...props}>
      {children}
    </h1>
  );
}
