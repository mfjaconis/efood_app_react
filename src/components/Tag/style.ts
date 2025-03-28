import styled from "styled-components";
import { colors } from "../../styles";

import type { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${colors.terceary_bg_color};
    color: ${(props) => (props.to ? "inherit" : colors.secundary_bg_color)};
    font-size: ${(props) => (props.to ? "14px" : "12px")};
    font-weight: 700;
    padding: ${(props) => (props.to ? "4px 6px" : "6px 4px")};
    display: inline;
    margin: ${(props) => (props.to ? "0" : "0 8px 12px")} ;

    &::first-letter {
    text-transform: uppercase; 
  } 


  a {
    color: inherit;  
  }

`;
