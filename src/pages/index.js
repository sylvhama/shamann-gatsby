import React from 'react';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

export default () => (
  <>
    <SEO title="About Me" keywords={['react', 'javascript', 'web']} />
    <Paragraph>
      I am from France, I{' '}
      <span role="img" aria-label="love">
        💖
      </span>{' '}
      the Web, especially{' '}
      <Anchor href="https://github.com/sylvhama/pwa-links">
        Progressive Web Apps
      </Anchor>
      . I mostly do Front-end development (TypeScript, React, Redux...) but I do
      enjoy Backend as well (Node.js, GraphQL, WordPress...). I embrace the{' '}
      <abbr title="Keep it Simple, Stupid">KISS</abbr> principle.
    </Paragraph>
  </>
);
