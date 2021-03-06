import React from 'react';

import Seo from '../components/Seo';
import Paragraph from '../components/shared/Paragraph';

export default function Index() {
  return (
    <>
      <Seo title="About Me" keywords={['react', 'javascript', 'web']} />
      <Paragraph>
        I am from France, I{' '}
        <span role="img" aria-label="love">
          💖
        </span>{' '}
        the Web. I mostly do Front-end development (TypeScript, React, Redux...)
        but I do enjoy Backend as well (Node.js, GraphQL, WordPress...). I
        embrace the <abbr title="Keep it Simple, Stupid">KISS</abbr> principle.
      </Paragraph>
    </>
  );
}
