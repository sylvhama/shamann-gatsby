import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Title from '../../src/components/shared/Title';
import Subtitle from '../../src/components/shared/Subtitle';

const Wrapper = styled.header`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    @media (max-width: ${(props) => props.theme.breakpoint}) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    padding-top: 2rem;
    flex-direction: column;
    text-align: center;
  }
`;

const Header = ({ title, description, ...rest }) => (
  <Wrapper {...rest}>
    <StaticImage
      src="../images/shamann-icon.png"
      placeholder="blurred"
      layout="fixed"
      alt="Sylvain Hamann's portrait"
      quality={100}
      width={100}
      height={100}
    />
    <div>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </div>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  description: '',
};

export default Header;
