import React from 'react';

import Paragraph from './shared/Paragraph';
import Anchor from './shared/Anchor';

export default () => (
  <footer>
    <Paragraph>
      View my complete resume on{' '}
      <Anchor href="https://www.linkedin.com/in/sylvainhamann">LinkedIn</Anchor>
      .<br />
      Browse my portfolio on{' '}
      <Anchor href="https://www.behance.net/sylvhama/">Behance</Anchor>.
      <br />
      Follow me on <Anchor href="https://twitter.com/sylvhama/">Twitter</Anchor>
      .
      <br />
      See some of my code on{' '}
      <Anchor href="https://github.com/sylvhama">GitHub</Anchor>.{' '}
      <small>
        (
        <span role="img" aria-label="warning">
          ⚠️
        </span>{' '}
        All the companies I've worked for used private repos on Bitbucket or
        GitLab. Those side projects are made for fun, they don't reflect my
        rigor / skills.)
      </small>
    </Paragraph>
  </footer>
);
