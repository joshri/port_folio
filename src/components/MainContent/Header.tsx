import styled from "styled-components";
import linkedin from "../../assets/LI-In-Bug.png";
import resume from "../../assets/Resume.svg";
import github from "../../assets/github-mark.png";
import { Flex, fadeIn } from "../../styles";

const IconLink = styled.img`
  height: 100%;
  width: 50px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Name = styled.h1`
  position: absolute;
  font-size: 11vw;
  white-space: nowrap;
  transform: scale(1, 2);
`;

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <Flex className={className} animate={fadeIn} transition={{ duration: 1 }}>
      <Name>JOSHUA ISRAEL</Name>
      <Flex column end tall>
        <Flex end>
          <p>joshisrael93@gmail.com</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/joshri"
          >
            <IconLink alt="GitHub" src={github} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Dw6gPNcTRa_0yJyf-DDf567JYG3buM3EuojG3wGZfrc/edit?usp=sharing"
          >
            <IconLink alt="Resume" src={resume} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joshri"
          >
            <IconLink alt="LinkedIn" src={linkedin} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default styled(Header).attrs({ className: Header.name })`
  background: ${(props) => props.theme.colors.background};
  min-width: 500px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  border-bottom: 5px solid white;
  height: 200px;
  p,
  a {
    z-index: 2;
  }
  a {
    margin: 10px;
  }
  p {
    color: black;
  }
`;
