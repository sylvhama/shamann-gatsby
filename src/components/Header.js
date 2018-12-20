import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Title from '../../src/components/shared/Title';
import Subtitle from '../../src/components/shared/Subtitle';

const Wrapper = styled.header`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoint}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledImg = styled(Img)`
  border-radius: 50%;
`;

const Header = ({ title, description, ...rest }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "shamann-icon.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper {...rest}>
        <StyledImg
          fixed={data.file.childImageSharp.fixed}
          alt="Sylvain Hamann's portrait"
        />
        <div>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </div>
      </Wrapper>
    )}
  />
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
