import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

import collage from '../images/shamann-speaker.jpg';

const Img = styled.img`
  margin-right: 1rem;
  float: left;

  @media (max-width: ${props => props.theme.breakpoint}) {
    margin: 0 auto 1rem;
    display: block;
    float: none;
  }
`;

export default () => (
  <>
    <SEO title="Talks & Open Source" />
    <Img
      width={256}
      height={256}
      src={collage}
      alt="Collage of several pictures taken at meetups"
    />
    <Paragraph
      css={`
        &::after {
          content: '';
          display: table;
          clear: both;
        }
      `}
    >
      I have talked at several{' '}
      <Anchor href="https://www.meetup.com/members/182735276/">meetups</Anchor>{' '}
      in Seoul, Tokyo and Montreal. I also have co-organized public and internal
      meetups. I enjoy mentoring, pair programming and sharing. I've made a list
      of{' '}
      <Anchor href="https://github.com/sylvhama/modern-js">free content</Anchor>{' '}
      for people debuting with JavaScript and React.
    </Paragraph>
  </>
);
