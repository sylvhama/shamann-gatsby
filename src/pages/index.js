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
      the Web, especially Progressive Web Apps. I mostly do Front-end
      development (JavaScript, React, Redux...) but I do enjoy Backend as well
      (Node.js, GraphQL, WordPress...). I embrace the KISS principle.
    </Paragraph>
    <Paragraph>
      I think it's important as a web developer to stay curious in order to
      always learn and re-learn. E.g. I've made this website with{' '}
      <Anchor href="https://www.gatsbyjs.org/">Gatsby</Anchor> because I've
      heard a lot of positive feedback about it and I wanted to have fun with
      GraphQL as well.
    </Paragraph>
  </>
);
