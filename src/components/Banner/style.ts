import styled from "styled-components";

import { colors } from "../../styles";

export const ContainerBanner = styled.div`
    color: ${colors.secundary_text_color};
    position: relative;
    display: block;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    
    &::first-letter {
    text-transform: uppercase; 
  } 

    &::before {
        content: ""; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6); 
        z-index: 1; 
    }

    .container{
        position: relative;
        padding: 20px 0;
        z-index: 1;
    }
`;

export const TypeRestaurant = styled.h3`
    font-weight: 100;
    font-size: 32px;
`;

export const TitleRestaurant = styled.h3`
    font-weight: 900;
    font-size: 32px;
    padding: 130px 0;
`;
