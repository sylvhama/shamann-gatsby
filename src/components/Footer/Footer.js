import React from 'react';

import { Anchor } from 'components/shared/Anchor';
import { List } from 'components/shared/List';

export function Footer() {
  return (
    <footer style={{ paddingBottom: '2rem' }}>
      <nav aria-label="External links">
        <List hideMarkers>
          <li>
            View my complete resume on{' '}
            <Anchor href="https://www.linkedin.com/in/sylvainhamann">
              LinkedIn
            </Anchor>
            .
          </li>
          <li>
            Download my resume as PDF on{' '}
            <Anchor href="https://docs.google.com/document/d/1VybgVJOKbZOqbQwRfGkYp--9yP-xXfMF5TA7s8M250I/edit?usp=sharing">
              Google Drive
            </Anchor>
            .
          </li>
          <li>
            Browse my portfolio on{' '}
            <Anchor href="https://sylvhama.notion.site/sylvhama/My-Portfolio-5e616652b45249b0ae69dda6b23d73e3">Notion</Anchor>.
          </li>
          <li>
            See some of my code on{' '}
            <Anchor href="https://github.com/sylvhama">GitHub</Anchor>.
          </li>
        </List>
      </nav>
    </footer>
  );
}
