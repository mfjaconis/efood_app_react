import styled from "styled-components";

export const ListContainer = styled.section`
    padding-top: 52px;
    padding-bottom: 100px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, .1fr);
    gap: 32px;
    justify-content: space-between;

    @media (max-width: 1050px) {
        grid-template-columns: repeat(2, .1fr);
        justify-content: space-around;
        gap: 25px;
    }

    @media (max-width: 680px) {
        grid-template-columns: repeat(1, .1fr);
    }
`;
