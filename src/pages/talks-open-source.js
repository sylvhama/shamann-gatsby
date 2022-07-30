import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../components/Section";
import Paragraph from "../components/shared/Paragraph";
import Anchor from "../components/shared/Anchor";
import SectionSubtitle from "../components/shared/SectionSubtitle";
import { List } from "../components/shared/List";

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
    <Section title="Talks & Open Source">
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
          text-align: left;

          &::after {
            content: '';
            display: table;
            clear: both;
          }
        `}
      >
        I have talked at several meetups in Seoul, Tokyo and Montreal. I also
        have co-organized public and internal meetups at Ubisoft Montreal and
        Shopify. I sometimes record{" "}
        <Anchor href="https://www.youtube.com/playlist?list=PL3jMq0AMfCCeiXYJFp0HNLCR5uMZsMPs7">
          videos in French
        </Anchor>{" "}
        about my experience as a web developer.
      </Paragraph>

      <SectionSubtitle>My articles</SectionSubtitle>
      <List>
        <li>
          <Anchor href="https://dev.to/sylvhama/how-to-test-your-web-app-accessibility-26di">
            How to test your web app accessibility?
          </Anchor>{" "}
          - Jun 21, 2022
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/pwa-links">
            Progressive Web Apps links
          </Anchor>{" "}
          - Jun 17, 2020
        </li>
        <li>
          <Anchor href="https://dev.to/sylvhama/multi-directional-navigation-31k2">
            Multi Directional Navigation
          </Anchor>{" "}
          - Jun 8, 2020
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/modern-js">
            Road to Modern JavaScript and React
          </Anchor>{" "}
          - Nov 8, 2017
        </li>
      </List>

      <SectionSubtitle>My talks</SectionSubtitle>
      <List>
        <li>
          <Anchor href="https://github.com/sylvhama/bringing-the-www-to-the-aaa">
            Bringing the WWW to the AAA
          </Anchor>{" "}
          - Let's React Meetup at Breather (MTL) - Jan 11, 2019
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/introduction-to-pwa">
            Introduction to Progressive Web Apps
          </Anchor>{" "}
          - JS Montreal Meetup at La Gare - Nov 14, 2017
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/slides/tree/master/chausettes">
            Put your sockets on, a small intro to socket.io and rooms in
            Node.js®
          </Anchor>{" "}
          - TokyoJS Meetup at Tokyo Square Garden - Dec 14, 2015
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/slides/tree/master/phaser">
            My first game with Phaser
          </Anchor>{" "}
          - TokyoJS Meetup at 21 Cafe - Sep 14, 2015
        </li>
        <li>
          Let's make a HTML5 game with Phaser! - Seoul Web Technology Meetup at
          Asiance - Mar 5, 2015
        </li>
      </List>
    </Section>
  );
}
