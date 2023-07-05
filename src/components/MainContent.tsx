import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    100% {
        opacity: 1;
    }
`;

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  return <div className={className}>hi</div>;
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  opacity: 0;
  &.transition {
    animation: ${fadeIn} 2s 1s linear forwards;
  }
`;
