import styled from "styled-components";

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  return <div className={className}>hi</div>;
}

export default styled(MainContent).attrs({ className: MainContent.name })``;
