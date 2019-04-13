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
    <Img width={256} height={256} src={collage} alt="Collage of several pictures taken at meetups" />
    <Paragraph>
      I contribute to the Web / JS community as much as I can. I love
      talking at local{' '}
      <Anchor href="https://www.meetup.com/members/182735276/">meetups</Anchor>{' '}
      (Seoul, Tokyo and Montreal) or taking care of developers debuting in web
      development. E.g. I've made a list of{' '}
      <Anchor href="https://github.com/sylvhama/modern-js">free content</Anchor>{' '}
      for people debuting with ES6/2015 and React. All interns I've worked with
      have said I was a good mentor{' '}
      <span role="img" aria-label="flushed face">
        😳
      </span>
      . I also enjoy doing internal presentations or sharing articles to
      introduce new concepts or libraries to my teammates. I am also used to do
      pair programming to solve problems in a more efficient way.
    </Paragraph>
  </>
);
