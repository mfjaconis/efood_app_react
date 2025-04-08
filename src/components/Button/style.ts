import styled from "styled-components";
import { colors } from "../../styles";

import type { Props } from ".";

export const ButtonStyled = styled.button<Props>`
    width: ${(props) => (props.modal ? "218px" : "100%")};
    height: 24px;
    background-color: ${colors.secundary_bg_color};
    color:${colors.terceary_bg_color};
    font-weight: 700;
    font-size: ${(props) => (props.modal ? "14px" : "16px")} ;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }
`;
