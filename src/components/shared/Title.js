import styled from 'styled-components';

export default styled.h1`
  margin: 0;
  padding-bottom: 1rem;
  line-height: 1;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.font.mono};
`;
