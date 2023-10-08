import { motion } from "framer-motion";
import styled, { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  fontSizes: {
    small: "12px",
    medium: "24px",
    large: "48px",
  },
  colors: {
    background: "#ffb7a1",
    white: "#ffffff",
    black: "#212529",
    oneColor: "#f5f064",
    blue: "#3daeff",
    purple: "#bf2ed6",
    lime: "#99d62e",
    orange: "#ff8845",
  },
};

export const GlobalStyles = createGlobalStyle`
    html, body, main  {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-height: 100vh;
      min-height: 600px;
      width: 100vw;
      max-width: 100vw;
      min-width: 600px;
      padding: 0;
      margin: 0;
    }

    html {
      background: ${(props) => props.theme.colors.background};
    }

    body, main {
      height: 100%;
      width: 100%;
    }

    main {
      padding: ${(props) => props.theme.spacing.medium};
    }

    h1, h2, h3, h4, h5, h6, p, span {
      font-family: 'Lato', sans-serif;
      color: ${(props) => props.theme.colors.white};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
    }

    button {
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }

`;

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flex = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

//framer motion animates
export const fadeIn = { opacity: [0, 1] };
