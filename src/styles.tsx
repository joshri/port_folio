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
        background: #966919;
    }
`;

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
