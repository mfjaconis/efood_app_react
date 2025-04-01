import styled from "styled-components";
import { colors } from "../../styles";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5); 
    
    .container{
        display: flex;
        align-items: center;
        height: 100%;
    }
    `;

export const ModelCard = styled.div`
    display: flex;
    position: relative; 
    background-color: ${colors.terceary_bg_color};
    color: ${colors.secundary_text_color};
    width: 1024px;
    height: 344px;    
`;

export const ModelInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 656px;
    margin-top: 32px;
    margin-right: 32px;
`;

export const ImageModal = styled.img`
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
`;

export const ParagraphInfo = styled.p`
    margin: 16px 0;
    width: 656px;
`;

export const ButtonCloseModal = styled.button`
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${colors.secundary_text_color}
`;
