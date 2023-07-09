import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import coverImg from "../assets/TitlePhoto.jpg";
import { Container, createConfetti } from "../styles";

const CoverImg = styled(motion.img)``;

const CoverButton = styled.button`
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
  letter-spacing: 5px;
  font-size: 48px;
  box-shadow: 0 0 2em 0.2em white;
`;

const CoverTitle = styled(motion.h1)`
  font-size: 150px;
  letter-spacing: 2px;
  position: absolute;
`;

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
};

function Cover({ className }: Props) {
  return (
    <Container
      className={className}
      exit={{
        scale: 4,
        opacity: 0,
      }}
      transition={{ duration: 2 }}
    >
      <CoverTitle
        //flex centered spacing places the "0" position at dead center. Animate around "50" === "100"
        initial={{ x: "-80vw", y: "-40vh" }}
        animate={{ x: "-25vw" }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        THE ONE
      </CoverTitle>
      <CoverTitle
        initial={{ x: "80vw", y: "-40vh" }}
        animate={{ x: "25vw" }}
        transition={{ delay: 2.5, duration: 2 }}
      >
        THE ONLY
      </CoverTitle>
      <CoverTitle
        initial={{ rotate: "180deg", y: "60vh" }}
        animate={{ rotate: "2160deg", y: "40vh" }}
        transition={{ delay: 4.5, duration: 2, ease: "easeOut" }}
      >
        JOSHUA ISRAEL
      </CoverTitle>
      <CoverImg
        src={coverImg}
        initial={{ height: 0, width: 0 }}
        animate={{ width: "100%", height: "100%" }}
        transition={{ duration: 6, type: "tween", ease: "easeIn" }}
      />
      <CoverButton>
        <Link to="/home">Enter</Link>
      </CoverButton>
      {createConfetti().map((style, index) => {
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
              delay: 6,
              repeat: 0,
            }}
            style={{
              background: style.background,
            }}
          />
        );
      })}
    </Container>
  );
}

export default styled(Cover).attrs({ className: Cover.name })`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
