import styled from "styled-components";
import { theme } from "../../styles";

// function Circle({
//   className,
//   duration,
//   delay,
// }: {
//   className?: string;
//   duration: number;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       className={className}
//       animate={{ translateY: [`200vh`, `-200vh`] }}
//       transition={{
//         duration: duration,
//         delay: delay || 0,
//         repeat: Infinity,
//         ease: "easeOut",
//       }}
//     />
//   );
// }

const StyledCircle = styled.div<{
  left: number;
  top: number;
  size: number;
  layer: number;
  color: keyof typeof theme.colors;
}>`
  position: absolute;
  top: ${({ top }) => top}vh;
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
      <StyledCircle left={30} top={-40} size={2000} layer={3} color="yellow" />
      <StyledCircle left={-50} size={2000} layer={3} top={30} color="orange" />
      <StyledCircle left={1} top={-30} size={1000} layer={1} color="purple" />
      {/* <StyledCircle
        left={60}
        size={800}
        layer={2}
        
      />
      <StyledCircle
        left={20}
        size={1000}
        layer={2}
        
      />
      <StyledCircle
        left={40}
        size={600}
        layer={2}
        
      />
      <StyledCircle
        left={10}
        size={800}
        layer={1}
        
      /> */}
    </div>
  );
}

export default styled(Background).attrs({ className: Background.name })`
  position: absolute;
  width: 100%;
  height: 100%;
`;
