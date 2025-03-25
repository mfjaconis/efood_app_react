import styled from "styled-components";

import ImageFoodBg from "../../assets/images/comida-italiana.svg";
import { colors } from "../../styles";

export const ContainerBanner = styled.image`
    color: ${colors.secundary_text_color};
    position: relative;
    display: block;
    width: 100%;
    height: 280px;
    background-image: url(${ImageFoodBg});
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
        content: ""; 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4); 
        z-index: 1; 
    }

    .container{
        position: relative;
        padding: 20px 0;
        z-index: 2;
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
