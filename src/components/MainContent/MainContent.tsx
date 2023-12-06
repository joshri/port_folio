import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import head from "../../assets/HeadshotHead.png";
import { Flex, fadeIn, rotate, rotateReverse } from "../../styles";
import Header from "./Header";

const SectionText = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

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
    border-right: 4px solid ${(props) => props.theme.colors.purple};
    border-bottom: 4px solid ${(props) => props.theme.colors.purple};
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
`;

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <Flex
      tall
      column
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
      {/* <Background /> */}
      <Header />
      <SectionText>UNDER SERIOUS CONSTRUCTION</SectionText>
    </Flex>
  );
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  @media (min-width: 425px) {
    cursor: none;
  }
`;
