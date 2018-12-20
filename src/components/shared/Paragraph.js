import styled from 'styled-components';

export default styled.p`
  margin: 0;
  padding-bottom: 0.75rem;
  line-height: 1.5;
  font-size: 1.15rem;
  text-align: justify;

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 1rem;
  }
`;
