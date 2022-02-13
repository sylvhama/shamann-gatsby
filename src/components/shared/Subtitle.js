import styled from 'styled-components';

export default styled.h2`
  margin: 0;
  padding: ${(props) => (props.withoutPadding ? 0 : '0.75rem 0')};
  line-height: 1;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.font.mono};
`;
