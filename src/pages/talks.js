import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Paragraph from '../components/shared/Paragraph';

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
    <SEO title="Talks" />
    <Img width={256} height={256} src={collage} />
    <Paragraph>
      Sadly I never have worked for a company that had an open source culture.
      So my only contributions to the Web / JS community are typos fix within
      some GitHub repositories, talks at meetups (Seoul, Tokyo and Montreal) and
      taking care of developers debuting in web development. All interns I've
      worked with have said I was a good mentor
      <span role="img" aria-label="flushed face">
        😳
      </span>
      . I also enjoy doing internal presentations to introduce new concepts or
      libraries to my teammates. I am also used to do pair programming to solve
      problems in a more efficient way.
    </Paragraph>
  </>
);
