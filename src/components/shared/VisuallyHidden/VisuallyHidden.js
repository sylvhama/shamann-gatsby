import React from 'react';

import * as styles from './VisuallyHidden.module.css';

export function VisuallyHidden({ children, ...props }) {
  return (
    <div className={styles.VisuallyHidden} {...props}>
      {children}
    </div>
  );
}
