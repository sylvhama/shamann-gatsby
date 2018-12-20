import styled from 'styled-components';

export default styled.a`
  font-family: ${props => props.theme.font.mono};
  color: ${props => props.theme.color.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
