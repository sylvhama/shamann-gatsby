import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

const Quote = styled.blockquote`
  margin: 0 1rem 0.75rem;
  padding-left: 0.75rem;
  border-left: 2px solid currentColor;
  font-size: 1rem;
`;

export default function Showcase() {
  return (
    <>
      <Seo title="Showcase" />
      <Paragraph>
        I don't want to spam screenshots of all projects I've worked on. Please
        visit my{' '}
        <Anchor href="https://www.behance.net/sylvhama/">Behance</Anchor> if you
        want to see them.
      </Paragraph>
      <Paragraph>
        Instead, I am going to talk about my main project at Ubisoft. I've
        posted a{' '}
        <Anchor href="https://twitter.com/sylvhama/status/1046820308647387141">
          thread
        </Anchor>{' '}
        on Twitter with more visuals if you are interested. I also wrote an{' '}
        <Anchor href="https://dev.to/sylvhama/multi-directional-navigation-31k2">
          article
        </Anchor>{' '}
        focusing on the navigation and others UX tips.
      </Paragraph>
      <Paragraph>
        When I first started my job at Ubisoft Montreal, I was part of a team in
        charge of maintaining a Single-Page Application for PlayStation 4 and
        Xbox One which was roughly five years old. The tech debt was quite big,
        I’ve decided to work on my free time to prepare a proof of concept with
        React in order to convince my teammates and the management that a fresh
        stack would increase our comfort, our productivity and the performance
        of the app.
        <br />
        I’ve made a presentation to point out how performance is important for
        the User Experience. I’ve done my best to make sure that even people
        without technical background can easily understand. I have shown them
        real examples and statistics in order to sensibilize them e.g.
      </Paragraph>
      <Quote>
        53% of people will abandon a mobile site if it takes more than 3 seconds
        to load. <small>Source: Google</small>
      </Quote>
      <Paragraph>
        I’ve used tools such as Lighthouse and Webpagetest to show metrics of
        our application and I compared them with our competitors (e.g. Steam).
        I’ve mostly focused on file sizes, the app was shipping 651KB JS + 466KB
        CSS (gzipped) / 1.8MB JS + 1.1MB CSS (uncompressed). To explain why file
        size matters, I’ve introduced them concepts such as First Meaningful
        Paint and Time to Interactive. I also spent time to explain why image
        optimization is vital based on a HTTP Archive report. I’ve shown them an
        example of an image used on prod which had a size equal to 3.5MB. I used
        a simple tool called TinyPNG to compress it in front of them. People
        were amazed to see that I could reduce the image size by roughly 70% and
        keep the same quality.
        <br /> I’ve also spent time to explain that too many HTTP requests, the
        code was hard to maintain and new technologies like GraphQL or the BFF
        pattern could solve our issues. I’ve explained that we must track all
        those things with Google Analytics in order to base our future decisions
        and priorities on its reports. I also tried to introduce the concept of
        Design System and Atomic Design via Storybook and Figma.
      </Paragraph>
      <Paragraph>
        The project was a success a we also ported it on Nintendo Switch
        afterwise. If you want more details about the stack and the final result
        then you should check this{' '}
        <Anchor href="https://twitter.com/sylvhama/status/1046820308647387141">
          thread
        </Anchor>
        ! You can also read my{' '}
        <Anchor href="https://dev.to/sylvhama/multi-directional-navigation-31k2">
          article
        </Anchor>{' '}
        focusing on the navigation and others UX tips.
      </Paragraph>
    </>
  );
}
