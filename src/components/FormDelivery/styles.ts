import styled from "styled-components";
import { colors } from "./../../styles";

export const ContianerForm = styled.div`
    width: 345px;
    height: 347px;
    color: ${colors.secundary_bg_color};

    h2{
        margin-bottom: 16px;
    }
`;

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;

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

export const ContainerEnd = styled.div`
    display: grid;
    grid-template-columns: .5fr .5fr;
    gap: 34px;
`;

export const ContentEnd = styled.div`
    display: flex;
    flex-direction: column;

    input{
        max-width: 155px;  
    }
    
`;
