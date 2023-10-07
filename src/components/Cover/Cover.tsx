import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles";

const CoverButton = styled.button`
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
  letter-spacing: 5px;
  font-size: 48px;
  box-shadow: 0 0 2em 0.2em white;
`;

const CoverTitle = styled(motion.h1)`
  font-size: 150px;
  letter-spacing: 2px;
  position: absolute;
`;

type Props = {
  className?: string;
};

function Cover({ className }: Props) {
  return (
    <Container
      className={className}
      exit={{
        scale: 4,
        opacity: 0,
      }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        animate={{ fontSize: ["1vw", "15vw", "30vw"], opacity: [0, 1, 0] }}
        transition={{ duration: 3 }}
        className="welcome"
      >
        WELCOME
      </motion.h1>
      <div className="confirmText column">
        <motion.h6
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 3.5, duration: 2 }}
        >
          the next page has an animated introduction with autoplaying audio and
          is quite colorful.
        </motion.h6>
        <motion.h6
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 4.5, duration: 2 }}
        >
          If you're scared, press no party.
        </motion.h6>
        <motion.h6
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 5.5, duration: 2 }}
        >
          Otherwise, I'll see you in about thirty seconds.
        </motion.h6>
      </div>
      <motion.div
        className="confirmText column"
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 6.5, duration: 2 }}
      ></motion.div>

      <CoverButton>
        <Link to="/home">NO PARTY</Link>
      </CoverButton>
    </Container>
  );
}

export default styled(Cover).attrs({ className: Cover.name })`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
