import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { Title } from 'components/shared/Title';
import { Subtitle } from 'components/shared/Subtitle';
import * as styles from './Header.module.css';

export function Header({ title, description, ...rest }) {
  return (
    <header className={styles.Header} {...rest}>
      <StaticImage
        src="../../images/shamann-icon.png"
        placeholder="blurred"
        layout="fixed"
        alt="Sylvain Hamann's portrait"
        quality={100}
        width={100}
        height={100}
      />
      <div>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </div>
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
