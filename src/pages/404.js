import React from 'react';
import styled from 'styled-components';

import Section from '../components/Seo';
import gif from '../images/travolta.gif';

const Img = styled.img`
  margin: 0 auto;
  max-width: 260px;
  width: 100%;
  display: block;
`;

export default function NotFoundPage() {
  return (
    <Section title="404: Not found">
      <Img alt="Confused John Travolta scene from Pulp Fiction" src={gif} />
    </Section>
  );
}
