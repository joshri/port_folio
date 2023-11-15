import styled from "styled-components";
import Header from "./Header";

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  return (
    <div className={className}>
      <Header />
    </div>
  );
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  min-width: 500px;
`;
