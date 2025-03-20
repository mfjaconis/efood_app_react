
import { createGlobalStyle } from "styled-components";

const colors = {
    primary_bg_color: '#ffebda',
    secundary_bg_color: '#fff8f2',
    terceary_bg_color: '#e56768',
    primary_text_color: '#E66767',
    secundary_text_color: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }

    body{
        background-color: ${colors.secundary_bg_color};
        color: ${colors.primary_text_color}
    }
`


