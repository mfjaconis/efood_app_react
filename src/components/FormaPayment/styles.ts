import styled from "styled-components";
import { colors } from "./../../styles";

export const ContianerForm = styled.div`
    width: 345px;
    height: 347px;
    color: ${colors.secundary_bg_color};

    h3{
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
    }

    Button{
        margin-bottom: 8px;
    }
`;

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    label{
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
    }

    input{
        width: 344px;
        height: 32px;
        margin-bottom: 8px;
        background-color: ${colors.secundary_bg_color};
        color:${colors.text_form_color};
        padding: 8px;
        font-size: 14px;
        font-weight: 700;
    }

    input:focus {
        outline: none; 
        border: none; 
    }
`;

export const ContainerInfo = styled.div`
    display: grid;
    grid-template-columns: .5fr .5fr;
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;

    #card_number{
        width: 228px;
        margin-right: 30px;
    }

    #card_cvv{
        width: 87px;
    }

    #expiry_month, #expiry_year{
        width: 155px;
    }

    #expiry_month{
        margin-right: 34px;
    }
    
`;
