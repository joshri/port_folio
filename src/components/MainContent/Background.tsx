import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Circle({
  className,
  duration,
  delay,
}: {
  className?: string;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ translateY: [`200vh`, `-200vh`] }}
      transition={{
        duration: duration,
        delay: delay || 0,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

const StyledCircle = styled(Circle)<{
  left: number;
  size: number;
  layer: number;
  color: string;
}>`
  position: absolute;
  left: ${({ left }) => left}vw;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  z-index: ${({ layer }) => `-${layer}`};
  background-color: ${({ color }) => {
    console.log(color);
    return color;
  }};
  border-radius: 50%;
`;

const colorOptions = [
  "#ffa1ba",
  "#ffe6a1",
  "#3daeff",
  "#a1ffe6",
  "#b7a1ff",
  "#a1ffb7",
  "#ff8845",
];

const makeLayer = (
  amount: number,
  maxMinSize: [number, number],
  zIndex: number,
  maxDuration: number
): React.ReactElement[] => {
  const layer = [];
  let i = 1;
  while (i <= amount) {
    layer.push(
      <StyledCircle
        left={Math.random() * 70}
        size={Math.random() * maxMinSize[0] + maxMinSize[1]}
        layer={zIndex}
        color={colorOptions[i % colorOptions.length]}
        duration={Math.random() * maxDuration + 30}
        // delay={Math.random() * 5}
      />
    );
    i++;
  }
  return layer;
};

type Props = {
  className?: string;
};

function Background({ className }: Props) {
  return (
    <div className={className}>
      <StyledCircle
        left={1}
        size={1000}
        layer={2}
        color={colorOptions[0]}
        duration={60}
      />
      <StyledCircle
        left={30}
        size={2000}
        layer={3}
        color={colorOptions[1]}
        duration={80}
      />
      <StyledCircle
        left={-50}
        size={2000}
        layer={3}
        color={colorOptions[4]}
        duration={80}
        delay={40}
      />
      <StyledCircle
        left={60}
        size={800}
        layer={2}
        color={colorOptions[2]}
        duration={40}
      />
      <StyledCircle
        left={20}
        size={1000}
        layer={2}
        color={colorOptions[3]}
        duration={40}
        delay={4}
      />
      <StyledCircle
        left={40}
        size={600}
        layer={2}
        color={colorOptions[6]}
        duration={40}
        delay={4}
      />
      <StyledCircle
        left={10}
        size={800}
        layer={1}
        color={colorOptions[5]}
        duration={60}
        delay={8}
      />
    </div>
  );
}

export default styled(Background).attrs({ className: Background.name })`
  position: absolute;
  width: 100%;
  height: 100%;
`;
