import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import ToggleMode from './ToggleMode';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,700|Roboto:400,700');
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

const HR = styled.hr`
  margin: 1.25rem auto 2rem;
  border: 0;
  height: 1px;
  width: 50%;
  display: block;
  background-color: ${props => props.theme.modeColors.text};
  opacity: 0.5;
  transition: background-color ease 0.5sec;
`;

const Layout = ({ children, ...rest }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            navLinks {
              name
              path
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, navLinks },
      },
    }) => (
      <>
        {rest['*'] !== 'offline-plugin-app-shell-fallback' && (
          <ToggleMode name="mode" />
        )}
        <Header title={title} description={description} />
        {// Dirty fix that avoids rendering Nav without active link
        rest['*'] !== 'offline-plugin-app-shell-fallback' && (
          <Nav links={navLinks} />
        )}
        <Wrapper>
          {children}
          <HR />
          <Footer />
        </Wrapper>
        <GlobalStyle />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
