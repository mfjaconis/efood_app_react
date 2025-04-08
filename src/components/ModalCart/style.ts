import styled from "styled-components";
import { colors } from "../../styles";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5); 
    
    `;

export const ModelCard = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right:0;
    width: 360px;
    height: 100vh;
    background-color: ${colors.terceary_bg_color};
    color: ${colors.secundary_text_color};
    padding: 32px 8px;
`;

export const ModelInfos = styled.div`
    position: relative;
    width: 344px;
    height: 100px;
    background-color: ${colors.secundary_bg_color};
    margin: 16px 0;
    display: flex;
    padding: 8px 0 12px 8px;
`;

export const ImageModal = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 8px;
`;

export const ParagraphPrice = styled.p`
    color: ${colors.terceary_bg_color};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`;

export const TitleProdutc = styled.h2`
    color: ${colors.terceary_bg_color};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
`;

export const ModelContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TrashButton = styled.button`
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    cursor: pointer;
`;

export const ContentValue = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
    color: ${colors.secundary_bg_color};

    p {
        font-size: 14px;
        font-weight: 700;
    }
  
`;
