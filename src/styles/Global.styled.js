import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-sarif;

    }

    body {
        background-color: ${(props) => props.theme.colors.primary}
    }
`;
