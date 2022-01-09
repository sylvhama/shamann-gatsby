import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';

const Img = styled.img`
  margin: 0 auto;
  max-width: 260px;
  width: 100%;
  display: block;
`;

export default function NotFoundPage() {
  return (
    <>
      <Seo title="404: Not found" />
      <Img
        alt="Confused Travolta gif"
        src="https://i.imgur.com/qhMbkGi.jpg"
      />
    </>
  );
}
