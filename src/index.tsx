import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { greenTheme } from "./themes/greenTheme";
import { blueTheme } from "./themes/blueTheme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={greenTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
