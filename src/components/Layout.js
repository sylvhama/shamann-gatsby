import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import ToggleMode from './ToggleMode';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { useSiteMetaData } from '../hooks';

const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: ${(props) => props.theme.modeColors.text};
    --background-color:  ${(props) => props.theme.modeColors.background};
  }
  * {
    box-sizing: border-box;
  }
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-width: 300px;
    background-color: var(--background-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: var(--text-color);
    transition: color 0.2s ease-out, background 0.2s ease-out;
  }

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.color.blue};
    outline-offset: 0.25rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    :focus-visible {
      transition: outline-offset 150ms ease-out;
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${(props) => props.theme.breakpoint};
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
  const { title, description, navLinks } = useSiteMetaData();

  return (
    <>
      <ToggleMode />
      <Header title={title} description={description} />
      <Nav links={navLinks} />
      <Wrapper>
        <main>{children}</main>
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
