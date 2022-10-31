import React from 'react';

import * as styles from './SectionSubtitle.module.css';

export function SectionSubtitle({ children, ...props }) {
  return (
    <h3 className={styles.SectionSubtitle} {...props}>
      {children}
    </h3>
  );
}
