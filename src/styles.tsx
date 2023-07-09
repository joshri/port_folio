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

type ConfettiStyle = {
  background: string;
  translateX: number;
  translateY: number;
  rotate: number;
};

export const createConfetti = (): ConfettiStyle[] => {
  let confettiArray = [];
  const colorOptions = ["#b48d18", "#3daeff", "#bf2ed6", "#99d62e", "#d66b2e"];
  for (let i = 0; i <= 80; i++) {
    let style: ConfettiStyle = {
      background: "",
      translateX: 0,
      translateY: 0,
      rotate: 0,
    };
    let x = Math.floor(Math.random() * 40) + 105;
    let y = Math.floor(Math.random() * 87.5) + 50;
    let rotate = Math.floor(Math.random() * 360) + 360;
    style.background = colorOptions[Math.floor(Math.random() * 5)];
    style.translateX = x;
    style.translateY = y;
    style.rotate = rotate;
    confettiArray.push(style);
  }
  return confettiArray;
};
