import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: ${colors.terceary_bg_color};
    color: ${colors.primary_bg_color};

`;

export const Image = styled.img`
    padding: 10px;  
    height: 230px;
`;
export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
`;

export const InfoCard = styled.div`
    padding: 10px;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    height: 150px;
`;
