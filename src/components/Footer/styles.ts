import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
    background-color: ${colors.secundary_bg_color};
    height: 298px;
    padding: 30px;

    @media (max-width: 550px) {
        padding: 15px 10px;
    }
`;

export const ImageLogo = styled.img`
    width: 125px;
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 80px;
    margin-top:33px;

    @media (max-width: 550px) {
        margin-bottom: 45px;
    }
`;

export const Paragraph = styled.p`
    width: 71%;
    text-align: center;
`;

export const FooterSection = styled.section`
   display: flex;
   height: 200px;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

export const LinkSocial = styled.a`
    width: 24px;
`