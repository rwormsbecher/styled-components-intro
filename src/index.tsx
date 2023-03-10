import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { greenTheme } from "./themes/greenTheme";
import { blueTheme } from "./themes/blueTheme";
import GlobalStyle from "./themes/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={greenTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
