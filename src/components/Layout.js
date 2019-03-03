import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,700|Roboto:400,700');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  min-width: 300px;
    background-color: ${props => props.theme.color.darkGrey};
    font-family: 'Roboto', sans-serif;
    color: white;
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
  background-color: white;
  opacity: 0.5;
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
        <Header title={title} description={description} />
        {rest['*'] !== 'offline-plugin-app-shell-fallback' && (
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
