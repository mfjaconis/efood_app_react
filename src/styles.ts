import { createGlobalStyle } from "styled-components";

export const colors = {
	primary_bg_color: "#fff8f0",
	secundary_bg_color: "#FFEBD9",
	terceary_bg_color: "#E66767",
	secundary_text_color: "#FFFFFF",
};

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    }

    body{
        background-color: ${colors.primary_bg_color};
        color: ${colors.terceary_bg_color}
    }
`;
