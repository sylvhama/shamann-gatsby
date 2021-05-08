import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import ToggleMode from './ToggleMode';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { useSiteMetaData } from '../hooks';

const offlineKey = 'offline-plugin-app-shell-fallback';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-width: 300px;
    background-color: ${props => props.theme.modeColors.background};
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.modeColors.text};
    transition: color 0.2s ease-out, background 0.2s ease-out;
  }
`;

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${props => props.theme.breakpoint};
`;

const Hr = styled.hr`
  margin: 1.25rem auto 2rem;
  border: 0;
  height: 1px;
  width: 50%;
  display: block;
  background-color: currentColor;
  opacity: 0.5;
  transition: background-color ease 0.5sec;
`;

const Layout = ({ children, ...rest }) => {
  const data = useSiteMetaData();

  const { title, description, navLinks } = data;

  return (
    <>
      {rest['*'] !== offlineKey && <ToggleMode name="mode" />}
      <Header title={title} description={description} />
      {rest['*'] === offlineKey ? (
        <Nav links={navLinks} />
      ) : (
        <Nav links={navLinks} />
      )}
      <Wrapper>
        {children}
        <Hr />
        <Footer />
      </Wrapper>
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
