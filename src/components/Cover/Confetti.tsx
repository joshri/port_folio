import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

const ConfettiContainer = styled(motion.div)`
  height: 10px;
  width: 30px;
  position: absolute;
  top: 100vh;
  right: 100vw;
  &.confetti-left {
    right: 0vw;
  }
`;

type Props = {
  className?: string;
  delay: number;
  length: number;
};

function Confetti({ className, delay, length }: Props) {
  const [delayed, setDelayed] = useState<boolean>(false);
  useEffect(() => {
    const show = setTimeout(() => setDelayed(true), delay);
    const hide = setTimeout(() => setDelayed(false), delay + length);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const confetti = createConfetti();
  return (
    <div className={className} aria-hidden={true}>
      {delayed &&
        confetti.map((style, index) => {
          return (
            <ConfettiContainer
              className={index > 40 ? "confetti-left" : ""}
              key={index}
              animate={{
                x: `${index > 40 ? -style.translateX : style.translateX}vw`,
                y: `-${style.translateY}vh`,
                rotate: style.rotate,
              }}
              transition={{
                duration: 3,
                repeat: 0,
              }}
              style={{
                background: style.background,
              }}
            />
          );
        })}
    </div>
  );
}

export default styled(Confetti).attrs({ className: Confetti.name })``;
