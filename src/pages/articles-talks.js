import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Section } from 'components/Section';
import { Anchor } from 'components/shared/Anchor';
import { SectionSubtitle } from 'components/shared/SectionSubtitle';
import { List } from 'components/shared/List';
import { Paragraph } from 'components/shared/Paragraph';

export default function Talks() {
  return (
    <Section title="Articles & Talks">
      <div className="float-left">
        <StaticImage
          src="../images/shamann-speaker.jpg"
          placeholder="blurred"
          layout="fixed"
          width={220}
          height={220}
          quality={100}
          alt="Collage of several pictures taken at meetups"
        />
      </div>
      <Paragraph
        className="reset"
        style={{
          textAlign: 'left',
        }}
      >
        I have talked at several meetups in Seoul, Tokyo and Montreal. I also
        have co-organized public and internal meetups at Ubisoft Montreal and
        Shopify. I occasionally create{' '}
        <Anchor href="https://www.youtube.com/playlist?list=PL3jMq0AMfCCeiXYJFp0HNLCR5uMZsMPs7">
          videos in French
        </Anchor>{' '}
        where I share my experiences as a front-end developer.
      </Paragraph>

      <SectionSubtitle>My articles</SectionSubtitle>
      <List>
        <li>
          <Anchor href="https://dev.to/sylvhama/gpt-is-my-new-bff-backend-for-frontends-1g03">
            GPT is my new BFF (Backend for Frontends)
          </Anchor>{' '}
          - Mar 28, 2023
        </li>
        <li>
          <Anchor href="https://dev.to/sylvhama/use-css-to-pass-an-element-through-your-letters-2ad3">
            Use CSS to pass an element through your letters
          </Anchor>{' '}
          - Feb 1, 2023
        </li>
        <li>
          <Anchor href="https://dev.to/sylvhama/how-to-test-your-web-app-accessibility-26di">
            How to test your web app accessibility?
          </Anchor>{' '}
          - Jun 21, 2022
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/pwa-links">
            Progressive Web Apps links
          </Anchor>{' '}
          - Jun 17, 2020
        </li>
        <li>
          <Anchor href="https://dev.to/sylvhama/multi-directional-navigation-31k2">
            Multi Directional Navigation
          </Anchor>{' '}
          - Jun 8, 2020
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/modern-js">
            Road to Modern JavaScript and React
          </Anchor>{' '}
          - Nov 8, 2017
        </li>
      </List>

      <SectionSubtitle>My talks</SectionSubtitle>
      <List>
        <li>
          Introduction to Remotion - React & React Native MTL Meetup at ACENSI -
          Dec 13, 2023
        </li>
        <li>
          <Anchor href="https://howtotestyourwebappa11y.netlify.app/1">
            How to test your web app a11y?
          </Anchor>{' '}
          - React & React Native MTL Meetup at Busbud - May 10, 2023
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/intro-to-styled-components">
            Introduction to Styled Components
          </Anchor>{' '}
          - MTL FED Talks (Shopify) - Aug 19, 2019
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/bringing-the-www-to-the-aaa">
            Bringing the WWW to the AAA
          </Anchor>{' '}
          - Let's React Meetup at Breather (MTL) - Jan 11, 2019
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/introduction-to-pwa">
            Introduction to Progressive Web Apps
          </Anchor>{' '}
          - JS Montreal Meetup at La Gare - Nov 14, 2017
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/slides/tree/master/chausettes">
            Put your sockets on, a small intro to socket.io and rooms in
            Node.js®
          </Anchor>{' '}
          - TokyoJS Meetup at Tokyo Square Garden - Dec 14, 2015
        </li>
        <li>
          <Anchor href="https://github.com/sylvhama/slides/tree/master/phaser">
            My first game with Phaser
          </Anchor>{' '}
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
