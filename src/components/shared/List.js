import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    ${(props) =>
      props.hideMarkers &&
      `
        list-style: none;
        padding: 0;
    `};
    line-height: 1.5;
    font-size: 1.15rem;

    @media (max-width: ${(props) => props.theme.breakpoint}) {
      font-size: 1rem;
    }
`;
