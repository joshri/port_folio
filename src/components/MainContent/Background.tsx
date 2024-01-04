import styled from "styled-components";
import { theme } from "../../styles";

const StyledBar = styled.div<{
  left: number;
  top: number;
  height?: number;
  width?: number;
  layer?: number;
  color: keyof typeof theme.colors;
  leftAngle?: boolean;
  circle?: boolean;
}>`
  position: absolute;
  top: ${({ top }) => top}vh;
  left: ${({ left }) => left}vw;
  height: ${({ height }) => height || 300}vh;
  width: ${({ width }) => width || 10}vw;
  z-index: ${({ layer }) => `-${layer}`};
  background-color: ${(props) => props.theme.colors[props.color]};
  transform: rotate(${({ leftAngle }) => leftAngle && "-"}45deg);
  ${(props) => props.circle && `border-radius: 50%`};
`;

type Props = {
  className?: string;
};

function Background({ className }: Props) {
  return (
    <div className={className}>
      {/* <StyledBar left={5} top={-50} color="lightBlue" />
      <StyledBar left={10} top={-50} color="blue" />
      <StyledBar left={15} top={-50} color="lime" />
      <StyledBar left={20} top={-50} color="pink" />
      <StyledBar left={30} top={-50} color="yellow" />
      <StyledBar left={35} top={-50} color="purple" />
      <StyledBar left={50} top={-30} color="orange" /> */}
    </div>
  );
}

export default styled(Background).attrs({ className: Background.name })`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;
