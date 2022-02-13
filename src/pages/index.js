import React from 'react';

import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';

export default function Index() {
  return (
    <Section title="About Me" keywords={['react', 'javascript', 'web']}>
      <Paragraph>
        I am a French citizen and a permanent resident of Canada who{' '}
        <span role="img" aria-label="loves">
          💖
        </span>{' '}
        crafting stuff in the Web. If I had to list my favorite tools and
        libraries in no particular order it would be: React, React Testing
        Library, TypeScript, Styled Components and GraphQL (I still love the{' '}
        <abbr title="Backends for Frontends">BFF</abbr> pattern). The{' '}
        <abbr title="Keep it Simple, Stupid">KISS</abbr> principle is my mojo. I
        also try my best to act as an accessibility advocate.
      </Paragraph>
    </Section>
  );
}
