import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';

const Img = styled.img`
  margin: 0 auto;
  max-width: 426px;
  width: 100%;
  display: block;
`;

export default function NotFoundPage() {
  return (
    <>
      <Seo title="404: Not found" />
      <Img
        alt="Confused Travolta gif"
        src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif"
      />
    </>
  );
}
