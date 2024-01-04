import { motion } from "framer-motion";
import styled, {
  DefaultTheme,
  createGlobalStyle,
  keyframes,
} from "styled-components";

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
    backgroundLight: "#ffded4",
    white: "#ffffff",
    black: "#212529",
    pink: "#ffa1ba",
    yellow: "#ffe6a1",
    blue: "#3daeff",
    lightBlue: "#a1ffe6",
    purple: "#b7a1ff",
    lime: "#a1ffb7",
    orange: "#ff8845",
  },
};

export const GlobalStyles = createGlobalStyle`
    html, body, main  {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      max-height: 100vh;
      min-height: 600px;
      height: 100vh;
      max-width: 100vw;
      min-width: 375px;
      width: 100vw;
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    html {
      background: ${(props) => props.theme.colors.background};
    }

    body, main {
      height: 100%;
      width: 100%;
    }

    h1, h2, h3, h4, h5, h6, p, span {
      font-family: 'Lato', sans-serif;
      color: ${(props) => props.theme.colors.white};
      text-align: center;
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

export const Flex = styled(motion.div)<{
  column?: boolean;
  tall?: boolean;
  between?: boolean;
  start?: boolean;
  end?: boolean;
  alignEnd?: boolean;
  margin?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  width: 100%;
  height: ${(props) => (props.tall ? "100%" : "auto")};
  justify-content: space-evenly;
  ${({ between }) => between && "justify-content: space-between;"}
  ${({ start }) => start && "justify-content: flex-start;"}
  ${({ end }) => end && "justify-content: flex-end;"}
  align-items: center;
  ${({ alignEnd }) => alignEnd && "align-items: flex-end;"}
  margin: ${(props) => props.margin || "0"};
`;

export const CoverButton = styled.button<{
  fontSize?: "small" | "medium" | "large";
}>`
  background: transparent;
  padding: ${(props) => props.theme.spacing.medium};
  border: 3px solid white;
  border-radius: 10px;
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.fontSizes[props.fontSize || "medium"]};
  box-shadow: 0 0 2em 0.2em white;
`;

//framer motion animates
export const fadeIn = { opacity: [0, 1] };

export const flyOut = { opacity: 0, scale: 5 };

export const partyColors = keyframes`
  0% {background: ${theme.colors.background}}
  20% {background: ${theme.colors.yellow}}
  40% {background: ${theme.colors.lime}}
  65% {background: ${theme.colors.lightBlue}}
  80% {background: ${theme.colors.purple}}
  100%: {background: ${theme.colors.background}}
`;

export const rotate = keyframes`
  100% {transform: rotate(360deg)}
  `;

export const rotateReverse = keyframes`
  100% {transform: rotate(-360deg)}
  `;
