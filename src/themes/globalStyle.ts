import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root,
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
    }

    #root {
        background-color: ${(themeProps) => themeProps.theme.colors.backgroundColor};
        color: ${(themeProps) => themeProps.theme.colors.textColor};
        font-family: "Roboto", sans-serif;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
