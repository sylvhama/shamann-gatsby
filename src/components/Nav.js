import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Location } from '@reach/router';

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
  transition: color 0.25s ease;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    display: block;
    background-color: currentColor;
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 0.25s ease, transform 0.25s ease-out;
  }

  &:before {
    left: 0;
    top: -0.75rem;
    transform-origin: center left;
  }
  &:after {
    right: 0;
    bottom: -0.75rem;
    transform-origin: center right;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.color.lightBlue};
  }

  &.active {
    color: ${props => props.theme.color.blue};

    &:before,
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const List = styled.ul`
  margin: 0 auto;
  padding: 4rem 1rem;
  width: 100%;
  max-width: ${props => props.theme.breakpoint};
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  list-style: none;

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 2rem 0;
    display: block;
  }
`;

const Item = styled.li`
  font-size: 1.25rem;
  font-family: ${props => props.theme.font.mono};
  text-transform: uppercase;
  text-align: center;
  display: block;
  &:last-child {
    padding-right: 0;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 1rem 0;
  }
`;

const Nav = ({ links, ...rest }) => (
  <Location>
    {({ location }) => (
      <nav {...rest}>
        {console.log(location)}
        <List>
          {links.map(link => (
            <Item key={link.name}>
              <StyledLink to={link.path} activeClassName={'active'}>
                {link.name}
              </StyledLink>
            </Item>
          ))}
        </List>
      </nav>
    )}
  </Location>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Nav;
