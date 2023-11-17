import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles";

function Circle({
  className,
  duration,
  top,
}: {
  className?: string;
  duration: number;
  top: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ translateY: [`${100 + top}vh`, `-200vh`] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    />
  );
}

const StyledCircle = styled(Circle)<{
  top: number;
  left: number;
  size: number;
  layer: number;
  color: keyof typeof theme.colors;
}>`
  position: absolute;
  top: ${({ top }) => 100 + top}vh;
  left: ${({ left }) => left}vw;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  z-index: ${({ layer }) => `-${layer}`};
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 50%;
`;

type Props = {
  className?: string;
};

function Background({ className }: Props) {
  return (
    <div className={className}>
      <StyledCircle
        top={20}
        left={80}
        size={800}
        layer={3}
        color="purple"
        duration={20}
      />
      <StyledCircle
        top={40}
        left={20}
        size={400}
        layer={3}
        color="lime"
        duration={20}
      />
      <StyledCircle
        top={50}
        left={60}
        size={300}
        layer={3}
        color="yellow"
        duration={20}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />
      <StyledCircle
        top={20}
        left={80}
        size={300}
        layer={3}
        color="purple"
        duration={30}
      />{" "}
    </div>
  );
}

export default styled(Background).attrs({ className: Background.name })`
  position: absolute;
  width: 100%;
  height: 100%;
`;
