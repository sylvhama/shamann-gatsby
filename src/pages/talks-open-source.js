import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

const ImageWrapper = styled.div`
  margin-right: 1rem;
  float: left;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    margin: 0 auto 1rem;
    display: flex;
    justify-content: center;
    float: none;
  }
`;

export default function Talks() {
  return (
    <>
      <Seo title="Talks & Open Source" />
      <ImageWrapper>
        <StaticImage
          src="../images/shamann-speaker.jpg"
          placeholder="blurred"
          layout="fixed"
          width={244}
          height={244}
          quality={100}
          alt="Collage of several pictures taken at meetups"
        />
      </ImageWrapper>
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
        <Anchor href="https://www.meetup.com/members/182735276/">
          meetups
        </Anchor>{' '}
        in Seoul, Tokyo and Montreal. I also have co-organized public and
        internal meetups. I enjoy mentoring, pair programming and sharing. I've
        made a list of{' '}
        <Anchor href="https://github.com/sylvhama/modern-js">
          free content
        </Anchor>{' '}
        for people debuting with JavaScript and React. I also record{' '}
        <Anchor href="https://www.youtube.com/playlist?list=PL3jMq0AMfCCeiXYJFp0HNLCR5uMZsMPs7">
          videos in French
        </Anchor>{' '}
        about my experience as a web developer.
      </Paragraph>
    </>
  );
}
