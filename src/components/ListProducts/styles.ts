import styled from "styled-components";

export const ListContainer = styled.section`
    padding-top: 52px;
    padding-bottom: 100px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, .1fr);
    gap: 20px;
    justify-content: space-between;
`;
