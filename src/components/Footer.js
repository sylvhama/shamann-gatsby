import React from 'react';
import styled from 'styled-components';

import Paragraph from './shared/Paragraph';
import Anchor from './shared/Anchor';

const StyledFooter = styled.footer`
  padding-bottom: 2rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Paragraph>
        View my complete resume on{' '}
        <Anchor href="https://www.linkedin.com/in/sylvainhamann">
          LinkedIn
        </Anchor>
        .<br />
        You can also download it as PDF on{' '}
        <Anchor href="https://docs.google.com/document/d/1VybgVJOKbZOqbQwRfGkYp--9yP-xXfMF5TA7s8M250I/edit?usp=sharing">
          Google Drive
        </Anchor>
        .<br />
        Browse my portfolio on{' '}
        <Anchor href="https://www.behance.net/sylvhama/">Behance</Anchor>.
        <br />
        Follow me on{' '}
        <Anchor href="https://twitter.com/sylvhama/">Twitter</Anchor>
        .
        <br />
        See some of my code on{' '}
        <Anchor href="https://github.com/sylvhama">GitHub</Anchor>.
      </Paragraph>
    </StyledFooter>
  );
}
