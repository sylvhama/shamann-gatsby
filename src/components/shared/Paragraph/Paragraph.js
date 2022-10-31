import React from 'react';

import classNames from 'classnames';
import * as styles from './Paragraph.module.css';

export function Paragraph({ children, className, ...props }) {
  return (
    <p className={classNames(styles.Paragraph, className)} {...props}>
      {children}
    </p>
  );
}
