import React from 'react';

import * as styles from './VisuallyHidden.module.css';

export function VisuallyHidden({
  children,
  element: Element = 'div',
  ...props
}) {
  return (
    <Element className={styles.VisuallyHidden} {...props}>
      {children}
    </Element>
  );
}
