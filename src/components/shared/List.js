import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: ${(props) => props.showMarker ? 'initial' : 'none'};
    line-height: 1.5;
    font-size: 1.15rem;

    @media (max-width: ${(props) => props.theme.breakpoint}) {
      font-size: 1rem;
    }
`;
