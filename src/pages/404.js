import React from 'react';

import { Section } from 'components/Section';
import gif from '../images/travolta.gif';

export default function NotFoundPage() {
  return (
    <Section title="404: Not found">
      <img
        style={{
          margin: '0 auto',
          maxWidth: 260,
          width: '100%',
          display: 'block',
        }}
        alt="Confused John Travolta scene from Pulp Fiction"
        src={gif}
      />
    </Section>
  );
}
