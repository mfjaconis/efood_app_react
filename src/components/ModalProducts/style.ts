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
    justify-content: space-around;
    background-color: ${colors.terceary_bg_color};
    color: ${colors.secundary_text_color};
    height: 344px;
    align-items: center;
    width: 100%;
    position: relative; 
`;

export const ModelInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 656px;
    height: 280px;
`;

export const ImageModal = styled.img`
    width: 280px;
    height: 280px;
`;

export const ParagraphInfo = styled.p`
    margin: 20px 0;
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
