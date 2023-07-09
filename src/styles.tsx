import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, main {
        height: 100vh;
        max-height: 100vh;
        width: 100vw;
        max-width: 100vw;
        padding: 0;
        margin: 0;
        background: black;
    }

    h1, h2, h3, h4, h5, h6, p, span {
      font-family: 'Lato', sans-serif;
      color: white;
    }
`;

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
