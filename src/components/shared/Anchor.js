import styled from 'styled-components';

export default styled.a`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.color.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:focus-visible {
      transition: outline-offset 75ms ease-out;
    }

    &:not(:active):focus-visible {
      transition-duration: 150ms;
    }
  }

  &:not(:active):focus-visible {
    outline-offset: 0.25rem;
  }
`;
