import { Link } from "react-router-dom";
import styled from "styled-components";

import type { Props } from ".";
import bgHeader from "../../assets/images/bg.svg";

export const HeaderContainer = styled.header<Props>`
    background-image:url(${bgHeader});
    display: flex;
    height: ${(props) => (props.home ? "384px" : "186px")}; 
    align-items: center;
    text-align: center;
    padding: 50px;
`;

export const P = styled.p<Props>`
    font-weight: 900;
    font-size: ${(props) => (props.home ? "36px" : "18px")}; 
    text-align: center;
    margin-top: ${(props) => (props.home ? "150px" : "0")};
    
    `;

export const LinkToHome = styled(Link)`
    font-size: 18px;
    font-weight: 900;
    color: inherit;
    `;

export const HeaderPerfilContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    `;

export const ButtonOpenCart = styled.button`
    font-size: 18px;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
    background: none;
    color: inherit;
`;
