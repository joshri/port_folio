import { motion } from "framer-motion";
import styled, { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: "#ffb7a1",
    white: "#ffe6de",
    black: "#212529",
    oneColor: "#f5f064",
    blue: "#3daeff",
    purple: "#bf2ed6",
    lime: "#99d62e",
    orange: "#ff8845",
  },
};

export const GlobalStyles = createGlobalStyle`
    html, body, main {
        height: 100vh;
        max-height: 100vh;
        width: 100vw;
        max-width: 100vw;
        padding: 0;
        margin: 0;
        background: ${(props) => props.theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6, p, span {
      font-family: 'Lato', sans-serif;
      color: ${(props) => props.theme.colors.white};
    }
`;

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
