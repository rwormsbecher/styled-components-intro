// import original module declarations
import "styled-components";

// extend properties of the theme
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            backgroundColor: string;
            primaryColor: string;
            primaryColorHover: string;
            headerColor: string;
            textColor: string;
        };
    }
}
