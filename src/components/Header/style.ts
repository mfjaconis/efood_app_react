import styled from "styled-components";
import bgHeader from "../../assets/images/bg.svg";

export const HeaderContainer = styled.header`
    background-image:url(${bgHeader});
    width: 100%;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    text-align: center;
`;

export const P = styled.p`
    font-weight: 900;
    font-size: 36px;
    width: 539px;
    height: 84px;
    text-align: center;
    margin-top: 150px;
`;
