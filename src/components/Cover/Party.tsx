import styled from "styled-components";
import { Flex, partyBorders, partyColors } from "../../styles";
type Props = {
  className?: string;
};

//Typescript, React, React Native, HTML, CSS, Go,

const BgCircle = styled(Flex)`
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.black};
  animation: ${partyBorders} 4s reverse 2s infinite;
  width: 90%;
  height: 90%;
  background: ${(props) => props.theme.colors.background};
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
`;

const GridItem = styled.div<{ delay: number; column: number; row: number }>`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  animation: ${partyColors} 5s linear ${(props) => props.delay}s infinite;
`;

const makeBg = () => {
  const els = [];
  let delay = 0;
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      els.push(<GridItem delay={delay} column={j} row={i} />);
      delay <= -4 ? (delay = 0) : (delay -= 1);
    }
  }
  return els;
};

function Party({ className }: Props) {
  return (
    <Flex className={className} key="party" tall column>
      <audio
        id="audio"
        preload="auto"
        autoPlay
        src={
          "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/audio/PortfolioTheme.m4a"
        }
      />
      <Grid>{makeBg().map((el) => el)}</Grid>
      {/* <BgCircle tall column></BgCircle> */}
      {/* <motion.img
        src={coverImg}
        initial={{ height: 0, width: 0 }}
        animate={{ width: "100%", height: "100%" }}
        transition={{ duration: 6, type: "tween", ease: "easeIn" }}
        alt="a beautiful picture of Joshua Israel"
      />
      <Confetti delay={6000} length={3000} /> */}
    </Flex>
  );
}

export default styled(Party).attrs({ className: Party.name })`
  height: calc(100%);
  width: 100%;
`;
