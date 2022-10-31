import React from 'react';
import PropTypes from 'prop-types';

import { ToggleMode } from 'components/ToggleMode';
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { useSiteMetaData } from 'hooks/useSiteMetaData';

import './global.css';
import * as styles from './Layout.module.css';

export function Layout({ children }) {
  const { title, description, navLinks } = useSiteMetaData();

  return (
    <>
      <ToggleMode />
      <Header title={title} description={description} />
      <Nav links={navLinks} />
      <div className={styles.Wrapper}>
        <main>{children}</main>
        <hr className={styles.Hr} />
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
