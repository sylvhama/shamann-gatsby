import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Nav from './Nav';

import Paragraph from './shared/Paragraph';
import Anchor from './shared/Anchor';

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

const Layout = ({ children }) => (
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
        <Nav links={navLinks} />
        <Wrapper>
          {children}
          <HR />
          <footer>
            <Paragraph>
              View my complete resume on{' '}
              <Anchor href="https://www.linkedin.com/in/sylvainhamann">
                LinkedIn
              </Anchor>
              .<br />
              Browse my portfolio on{' '}
              <Anchor href="https://www.behance.net/sylvhama/">Behance</Anchor>.
              <br />
              Follow me on{' '}
              <Anchor href="https://twitter.com/sylvhama/">Twitter</Anchor>.
              <br />
              See some of my code on{' '}
              <Anchor href="https://github.com/sylvhama">GitHub</Anchor>.{' '}
              <small>
                (
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{' '}
                All the companies I've worked for used private repos on
                Bitbucket or GitLab. Those side projects are made for fun, they
                don't reflect my rigor / skills.)
              </small>
            </Paragraph>
          </footer>
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
