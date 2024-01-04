import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import head from "../../assets/HeadshotHead.png";
import { Flex, fadeIn, rotate, rotateReverse } from "../../styles";
import ActualContent from "./ActualContent";
import Background from "./Background";
import Header from "./Header";

const MouseBorder = styled(Flex)<{ top?: number; left?: number }>`
  @media (max-width: 425px) {
    display: none;
  }
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background: transparent;
  pointer-events: none;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border: 4px solid ${(props) => props.theme.colors.blue};
  border-bottom: none;
  border-right: none;
  border-radius: 50%;
  animation: ${rotateReverse} 12s linear infinite;
  &.layer-two {
    width: 50px;
    height: 50px;
    border: none;
    border-right: 4px solid ${(props) => props.theme.colors.orange};
    border-bottom: 4px solid ${(props) => props.theme.colors.orange};
    border-left: none;
    border-top: none;
    animation: ${rotate} 8s linear infinite;
  }
  &.inner {
    border: none;
    animation: ${rotateReverse} 24s linear infinite;
    img {
      border-radius: 50%;
      width: 40px;
    }
  }
  &.layer-two:not(.inner)::before {
    position: absolute;
    content: " ";
    left: 64px;
    min-width: 12px;
    min-height: 12px;
    background: ${(props) => props.theme.colors.purple};
    border-radius: 50%;
  }
`;

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      className={className}
      animate={fadeIn}
      transition={{ duration: 1 }}
      onMouseMove={(e) => setMousePosition({ x: e.clientY, y: e.clientX })}
    >
      {/* mouse tracking icon */}
      <MouseBorder
        style={{ top: mousePosition.x - 25, left: mousePosition.y - 25 }}
      >
        <MouseBorder className="layer-two">
          <MouseBorder className="inner">
            <img alt="headshot-cursor" src={head} />
          </MouseBorder>
        </MouseBorder>
      </MouseBorder>
      <Background />
      <Header />
      <ActualContent />
    </motion.div>
  );
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  @media (min-width: 425px) {
    cursor: none;
  }
  overflow: scroll;
  height: 100%;
  width: 100%;
`;
