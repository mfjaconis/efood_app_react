import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.section`
    width: 472px;
    height: 398px;
    border: 1px solid ${colors.terceary_bg_color};
`

export const Image = styled.img`
    max-width: 470px;
    max-height: 396px;
`
export const ContentName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
`

export const InfoCard = styled.div`
    padding: 10px;
`

export const Paragraph = styled.p`
    margin: 10px 0;
`