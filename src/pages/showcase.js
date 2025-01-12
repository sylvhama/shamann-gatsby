import React from 'react';

import { Section } from 'components/Section';
import { SectionSubtitle } from 'components/shared/SectionSubtitle';
import { Paragraph } from 'components/shared/Paragraph';
import { Anchor } from 'components/shared/Anchor';
import { List } from 'components/shared/List';

export default function Showcase() {
  return (
    <Section title="Showcase">
      <Paragraph>
        This page is about highlighting some of my favorite professional
        projects.
      </Paragraph>

      <SectionSubtitle>
        Shopify Customer Accounts (2020-Present)
      </SectionSubtitle>
      <Paragraph>
        I contributed to many aspects of the Customer Accounts platform at
        Shopify, too numerous to list. However, what I am most proud of
        includes:
        <List>
          <li>
            Contributing to a{' '}
            <Anchor href="https://shopify.dev/docs/api/customer-account-ui-extensions/unstable/components">
              component library
            </Anchor>{' '}
            enabling third-party developers to build extensions for Checkout and
            Customer Accounts;
          </li>
          <li>
            Acting as a Web Accessibility champion by addressing WCAG-related
            issues, training my peers in a11y best practices, and going through
            an ADA audit, where testers expressed extreme satisfaction with the
            improvements;
          </li>
          <li>
            Seeing my login page branding work featured in{' '}
            <Anchor href="https://www.shopify.com/ca/editions/winter2025#branded-login-pages">
              Shopify Editions
            </Anchor>{' '}
            and praised by partners on{' '}
            <Anchor href="https://x.com/pmillegan/status/1848775306536235477">
              X
            </Anchor>{' '}
            and{' '}
            <Anchor href="https://www.linkedin.com/posts/talktohenryj_early-today-i-saw-nick-lenko-from-the-customer-activity-7254965834882682882-R53C">
              LinkedIn
            </Anchor>
            .
          </li>
        </List>
      </Paragraph>

      <SectionSubtitle>Ubisoft Club console app (2017-2019)</SectionSubtitle>
      <Paragraph>
        I was part of a team in charge of re-writing a five years old
        Single-Page Application used by Ubisoft games on PlayStation 4 and Xbox
        One. The goal was to migrate to a modern stack (React, Storybook,
        automatic tests, Continuous Integration) for a better Developer
        Experience while improving the app performance. The project was
        successful in reducing the load time from 5.4 seconds to 2.2 seconds. We
        even ported it on Nintendo Switch afterwise. I wrote a more{' '}
        <Anchor href="https://dev.to/sylvhama/multi-directional-navigation-31k2">
          detailed article
        </Anchor>{' '}
        about what I've done. What's cool about working for a video game
        company: players will record themselves. So you can easily find a{' '}
        <Anchor href="https://youtu.be/1s712yQ3NY0?t=34">nice video</Anchor> of
        your work.
      </Paragraph>

      <SectionSubtitle>Interactive hospital map (2016)</SectionSubtitle>
      <Paragraph>
        I developed an interactive map via <em>PixiJs</em> and <em>tween.js</em>{' '}
        for a hospital. The map was represented as a tilemap, imagine a 2D
        matrix where each cell can be a wall, a walkable floor etc... There was
        an editor app to design your map by drawing each tile or placing special
        sprites. I used a pathfinding algorithm in order to draw the shortest
        path between two tiles. Here is a{' '}
        <Anchor href="https://www.youtube.com/watch?v=fL5GDCH7VpM">
          video
        </Anchor>{' '}
        showing the result.
      </Paragraph>

      <SectionSubtitle>Offline first guest check-in app (2014)</SectionSubtitle>
      <Paragraph>
        We had a client in South Korea who was organizing networking events. We
        first developed an online quiz that would have new questions at each
        event. Winners would receive prizes such as a free bottle.
        <br /> Our client was also printing a gigantic spreadsheet to verify if
        each guest was correctly registered. He wanted an app that would look
        fancier and which would work in places that had no internet at all. Back
        in those days the concept of{' '}
        <Anchor href="https://github.com/sylvhama/pwa-links">
          Progressive Web App
        </Anchor>{' '}
        and <em>Service Worker</em> did not exist yet. But I still was able to
        develop an offline first web app via the <em>appCache API</em>. Here are{' '}
        <Anchor href="https://sylvhama.notion.site/sylvhama/My-Portfolio-5e616652b45249b0ae69dda6b23d73e3?p=a3affc20c05847e4b99f007f4bce51df">
          some pictures
        </Anchor>{' '}
        taken at one of the events.
      </Paragraph>
    </Section>
  );
}
