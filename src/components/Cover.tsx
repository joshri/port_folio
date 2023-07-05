import { Link } from "react-router-dom";
import styled from "styled-components";
import coverImg from "../assets/TitlePhoto.jpg";
import { Container } from "../styles";

const imageOut = {
  width: "200%",
  height: "auto",
  opacity: 0,
};

const CoverImg = styled.img`
  width: 100%;
  height: auto;
`;

const CoverButton = styled.button`
  position: absolute;
  margin: 0 auto;
`;

type Props = {
  className?: string;
};

function Cover({ className }: Props) {
  return (
    <Container className={className} exit={imageOut}>
      <CoverImg src={coverImg} />
      <CoverButton>
        <Link to="/home">Enter</Link>
      </CoverButton>
    </Container>
  );
}

export default styled(Cover).attrs({ className: Cover.name })`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
