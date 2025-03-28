import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 472px;
    height: 398px;
`;

export const TagsContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;  
`;

export const Image = styled.img`
    width: 472px;
    height: 217px;
    display: block;
`;
export const ContentName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    padding: 8px 8px 16px 7px;
`;

export const InfoCard = styled.div`
    width: 472px;
    height: 181px;
    border-right: 1px solid ${colors.terceary_bg_color};
    border-bottom: 1px solid ${colors.terceary_bg_color};
    border-left: 1px solid ${colors.terceary_bg_color}; 
    background-color: ${colors.secundary_text_color};
`;

export const Paragraph = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden; 
    text-overflow: ellipsis;
    width: 456px;
    margin: 0 8px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px; 
`;
