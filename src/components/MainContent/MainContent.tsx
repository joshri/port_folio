import styled from "styled-components";
import { Flex } from "../../styles";
import Background from "./Background";
import Header from "./Header";

const SectionText = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  return (
    <Flex tall className={className}>
      <Background />
      <Header />
      <SectionText>ABOUT</SectionText>
    </Flex>
  );
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  min-width: 500px;
`;
