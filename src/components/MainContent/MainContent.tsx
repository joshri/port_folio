import { motion } from "framer-motion";
import styled from "styled-components";
import { Flex, fadeIn } from "../../styles";
import Header from "./Header";

const SectionText = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

type Props = {
  className?: string;
};

function MainContent({ className }: Props) {
  return (
    <Flex
      tall
      column
      className={className}
      animate={fadeIn}
      transition={{ duration: 1 }}
    >
      {/* <Background /> */}
      <Header />
      <SectionText>UNDER SERIOUS CONSTRUCTION</SectionText>
    </Flex>
  );
}

export default styled(MainContent).attrs({ className: MainContent.name })`
  min-width: 500px;
`;
