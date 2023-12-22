import React from 'react';

import classNames from 'classnames';
import * as styles from './Paragraph.module.css';

export function Paragraph({ children, small, className, ...props }) {
  return (
    <p
      className={classNames(styles.Paragraph, small && styles.Small, className)}
      {...props}
    >
      {children}
    </p>
  );
}
