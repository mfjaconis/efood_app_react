import styled from "styled-components";

export const ListContainer = styled.section`
    padding: 52px 0;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;
    justify-items: center;

    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
    }

`;
