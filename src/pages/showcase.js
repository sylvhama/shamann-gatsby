import React from 'react';

import Section from '../components/Section';
import SectionSubtitle from '../components/shared/SectionSubtitle';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

export default function Showcase() {
  return (
    <Section title="Showcase">
      <Paragraph>
        This page is about highlighting some of my favorite profesional
        projects.
      </Paragraph>

      <SectionSubtitle>Ubisoft Club console app (2017-2019)</SectionSubtitle>
      <Paragraph>
        I was part of a team in charge of re-writing a five years old
        Single-Page Application used by Ubisoft games on PlayStation 4 and Xbox
        One. The goal was to migrate to a modern stack (React, Storybook,
        automatic tests, Continuous Integration) for a better Developer
        Experience while improving the app performance. The project was a
        success: the load time went from 5.4 seconds to 2.2 seconds. We even
        ported it on Nintendo Switch afterwise. I wrote a more{' '}
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
        <Anchor href="https://www.behance.net/gallery/44236015/HSK-First-Thursdays-afterwork-party-%282014%29">
          some pictures
        </Anchor>{' '}
        taken at one of the events.
      </Paragraph>
    </Section>
  );
}
