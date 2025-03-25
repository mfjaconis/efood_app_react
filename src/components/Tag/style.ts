import styled from "styled-components";
import { colors } from "../../styles";

import type { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${colors.terceary_bg_color};
    color: ${(props) => (props.to ? "inherit" : colors.secundary_bg_color)};
    font-size: ${(props) => (props.to ? "14px" : "12px")};
    font-weight: 700;
    padding: 8px;
    display: inline;

    &::first-letter {
    text-transform: uppercase; 
  } 

    a {
    color: inherit;   
    font-size: 14px; 
  }

`;
