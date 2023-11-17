import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CoverButton, Flex, fadeIn } from "../../styles";
import Party from "./Party";

const Welcome = styled(motion.h1)`
  position: absolute;
  z-index: -1;
`;

const Message = styled(motion.section)`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

type Props = {
  className?: string;
};

function Cover({ className }: Props) {
  const [party, setParty] = useState(false);
  return (
    <Flex
      column
      tall
      className={className}
      exit={{
        scale: 4,
        opacity: 0,
      }}
      animate={fadeIn}
      transition={{ duration: 1 }}
    >
      <Welcome
        animate={{
          fontSize: ["10px", "200px", "400px"],
          opacity: [0, 1, 0],
          display: ["none", "flex", "none"],
        }}
        transition={{ duration: 3 }}
      >
        WELCOME
      </Welcome>
      <AnimatePresence mode="wait">
        {party ? (
          <Party />
        ) : (
          <Message
            key="message"
            exit={{
              opacity: 0,
            }}
          >
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={fadeIn}
                transition={{ delay: 3.5, duration: 2 }}
              >
                the next page has an animated introduction with autoplaying
                audio and is quite colorful.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={fadeIn}
                transition={{ delay: 4.5, duration: 2 }}
              >
                If you're scared, press no party.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={fadeIn}
                transition={{ delay: 5.5, duration: 2 }}
              >
                Otherwise, I'll see you in about thirty seconds.
              </motion.h2>
            </div>
            <Flex
              animate={fadeIn}
              transition={{ delay: 6.5, duration: 2 }}
              initial={{ opacity: 0 }}
            >
              <CoverButton onClick={() => setParty(true)}>PARTY</CoverButton>
              <Link to="/home">
                <CoverButton>NO PARTY</CoverButton>
              </Link>
            </Flex>
          </Message>
        )}
      </AnimatePresence>
    </Flex>
  );
}

export default styled(Cover).attrs({ className: Cover.name })`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;