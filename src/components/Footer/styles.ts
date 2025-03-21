import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.secundary_bg_color};
    height: 300px;
    padding: 30px;
`;

export const ImageLogo = styled.img`
    width: 125px;
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const Paragraph = styled.p`
    width: 71%;
    text-align: center;
`;
