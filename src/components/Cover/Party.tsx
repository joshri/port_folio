import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import coverImg from "../../assets/TitlePhoto.jpg";
import { CoverButton, Flex, fadeIn, flyOut, partyColors } from "../../styles";
import Confetti from "./Confetti";

type Props = {
  className?: string;
};

//background
const Screen = styled(Flex)`
  position: absolute;
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  position: absolute;
  z-index: -1;
`;

const GridItem = styled.div<{ delay: number; column: number; row: number }>`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  animation: ${partyColors} 5s ease-in ${(props) => props.delay}s infinite;
`;

const makeBg = () => {
  const els = [];
  let delay = 0;
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      els.push(<GridItem delay={delay} column={j} row={i} key={`${i}${j}`} />);
      delay <= -4 ? (delay = 0) : (delay -= 1);
    }
  }
  return els;
};

//intro text (0-10s)
const IntroText = styled(motion.h1)<{ top?: string }>`
  position: absolute;
  font-size: 200px;
  top: ${({ top }) => top || "-200px"};
`;

const PersonText = styled(motion.h1)`
  //wow it's a rainbow!!
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 134, 0, 1) 20%,
    rgba(253, 248, 0, 1) 40%,
    rgba(83, 252, 0, 1) 60%,
    rgba(0, 70, 251, 1) 80%,
    rgba(246, 0, 255, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const X = styled(motion.h1)`
  color: red;
  font-size: 500px;
  position: absolute;
  opacity: 0;
`;

const scrollDown = { translateY: ["-30vh", "50vh", "150vh"] };
const softwareEngineer = {
  translateY: ["-20vh", "50vh", "50vh", "50vh"],
  opacity: [1, 1, 1, 0],
};

//skills text
const SkillsFlex = styled(Flex)<{ top?: string }>`
  position: absolute;
  top: ${({ top }) => top || "5vh"};
`;

function UnstyledSkillsText({
  className,
  text,
  delay,
}: {
  className?: string;
  text: string;
  size: "large" | "medium";
  delay: number;
}) {
  return (
    <motion.h1
      className={className}
      animate={opacityPlusScale}
      transition={{ delay: delay, duration: 1 }}
    >
      {text}
    </motion.h1>
  );
}

const SkillsText = styled(UnstyledSkillsText)`
  opacity: 0;
  font-size: ${(props) => (props.size === "large" ? "50px" : "30px")};
`;

const opacityPlusScale = {
  opacity: [0, 1, 1, 1],
  scale: [0.5, 1.5, 1],
};

//hot, hot photo
const HotPhoto = styled(motion.img)`
  position: absolute;
  height: auto;
  width: auto;
  top: 50%;
  left: 50%;
  max-height: 100%;
  max-width: 100%;
`;

//home button
const HomeButton = styled(CoverButton)`
  position: absolute;
  background: ${(props) => props.theme.colors.purple};
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.theme.fontSizes.large};
`;

function Party({ className }: Props) {
  const navigate = useNavigate();

  return (
    <Flex className={className} key="party" tall column animate={fadeIn}>
      <audio
        id="audio"
        preload="auto"
        autoPlay
        src={
          "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/audio/PortfolioTheme.m4a"
        }
      />

      {/* background */}
      <Grid>{makeBg().map((el) => el)}</Grid>
      <Screen animate={{ translateY: "100%" }} transition={{ duration: 2 }} />

      {/* intro text (0 - 10s) */}
      <IntroText animate={scrollDown} transition={{ delay: 2, duration: 2 }}>
        MEET
      </IntroText>
      <IntroText animate={scrollDown} transition={{ delay: 3, duration: 2 }}>
        YOUR
      </IntroText>
      <IntroText animate={scrollDown} transition={{ delay: 4, duration: 2 }}>
        NEW
      </IntroText>
      <IntroText animate={scrollDown} transition={{ delay: 5, duration: 2 }}>
        FAVORITE
      </IntroText>
      <IntroText
        animate={softwareEngineer}
        top="-40vh"
        transition={{ delay: 6, duration: 2 }}
      >
        SOFTWARE
      </IntroText>
      <IntroText
        animate={softwareEngineer}
        top="-20vh"
        transition={{ delay: 6, duration: 2 }}
      >
        ENGINEER
      </IntroText>
      <X
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 7, duration: 1 }}
      >
        X
      </X>
      <PersonText
        animate={{
          rotate: 360,
          opacity: [0, 1, 1, 1, 0],
          fontSize: ["10px", "200px", "400px"],
        }}
        transition={{ delay: 8, duration: 2 }}
      >
        PERSON
      </PersonText>

      {/* skills text */}
      <SkillsFlex animate={flyOut} transition={{ delay: 17.5, duration: 1 }}>
        <SkillsText size="large" text="HE DOES:" delay={9.5} />
      </SkillsFlex>
      <SkillsFlex
        top="15vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="large" text="TYPESCRIPT" delay={10} />
        <SkillsText size="large" text="REACT" delay={10.5} />
        <SkillsText size="large" text="REACT NATIVE" delay={11} />
        <SkillsText size="large" text="CSS" delay={11.5} />
      </SkillsFlex>
      <SkillsFlex
        top="25vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="large" text="REDUX" delay={12} />
        <SkillsText size="large" text="GO" delay={12.5} />
        <SkillsText size="large" text="GIT" delay={13} />
        <SkillsText size="large" text="K8S" delay={13.5} />
      </SkillsFlex>
      <SkillsFlex
        top="35vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="medium" text="PYTHON" delay={14} />
        <SkillsText size="medium" text="AWS" delay={14.25} />
        <SkillsText size="medium" text="HTML" delay={14.5} />
        <SkillsText size="medium" text="HOOKS" delay={14.75} />
        <SkillsText size="medium" text="ASYNC/AWAIT" delay={15} />
        <SkillsText size="medium" text="D3" delay={15.25} />
      </SkillsFlex>
      <SkillsFlex
        top="45vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="medium" text="REST" delay={15.5} />
        <SkillsText size="medium" text="GRPC" delay={15.75} />
        <SkillsText size="medium" text="BOOTSTRAP" delay={16} />
        <SkillsText size="medium" text="SCSS" delay={16.25} />
        <SkillsText size="medium" text="STYLED-COMPONENTS" delay={16.5} />
        <SkillsText size="medium" text="POSTMAN" delay={16.75} />
      </SkillsFlex>
      <SkillsFlex
        top="55vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="large" text="PLUS:" delay={17} />
      </SkillsFlex>
      <SkillsFlex
        top="65vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText size="large" text="I don't make people mad" delay={17} />
      </SkillsFlex>
      <SkillsFlex
        top="75vh"
        animate={flyOut}
        transition={{ delay: 17.5, duration: 1 }}
      >
        <SkillsText
          size="large"
          text="and I'm objectively beautiful"
          delay={17}
        />
      </SkillsFlex>
      <motion.h1
        style={{
          position: "absolute",
          fontSize: "50vw",
          width: window.innerWidth,
          zIndex: 0,
          whiteSpace: "nowrap",
        }}
        animate={{
          translateX: [window.innerWidth, -(window.innerWidth * 4)],
        }}
        transition={{ duration: 4, delay: 18, ease: "linear" }}
      >
        JOSHUA ISRAEL
      </motion.h1>
      <HotPhoto
        src={coverImg}
        initial={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 6, delay: 20, type: "tween", ease: "easeIn" }}
        alt="a beautiful picture of Joshua Israel"
      />
      <Flex
        animate={fadeIn}
        transition={{ delay: 26, duration: 0.5 }}
        initial={{ opacity: 0 }}
      >
        <HomeButton onClick={() => navigate("/home")}>ONWARDS!</HomeButton>
      </Flex>
      <Confetti delay={26000} length={3000} />
    </Flex>
  );
}

export default styled(Party).attrs({ className: Party.name })`
  height: calc(100%);
  width: 100%;
`;
