import styled from "styled-components";
import { colors } from "../../styles";

export const ButtonStyled = styled.button`
    width: 100%;
    height: 24px;
    background-color: ${colors.secundary_bg_color};
    color:${colors.terceary_bg_color};
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }
`;
