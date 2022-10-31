import React from 'react';

import * as styles from './List.module.css';
import classNames from 'classnames';

export function List({ children, hideMarkers, ...props }) {
  return (
    <ul
      className={classNames(styles.List, hideMarkers && styles.HideMarkers)}
      {...props}
    >
      {children}
    </ul>
  );
}
