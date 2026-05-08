import React from 'react';
import PropTypes from 'prop-types';

import { Title } from 'components/shared/Title';
import { Subtitle } from 'components/shared/Subtitle';
import * as styles from './Header.module.css';

export function Header({ title, description, ...rest }) {
  return (
    <header className={styles.Header} {...rest}>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  description: '',
};
