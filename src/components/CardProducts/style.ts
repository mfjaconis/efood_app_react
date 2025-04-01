import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${colors.terceary_bg_color};
    color: ${colors.secundary_bg_color};
    width: 320px;
    height: 338px;
`;

export const Image = styled.img`
    padding: 8px;  
    height: 185px;
`;
export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
`;

export const InfoCard = styled.div`
    margin: 0 8px;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    width: 304px;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden; 
    text-overflow: ellipsis;
`;
