import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import Confetti from "./Confetti";
import coverImg from "../../assets/TitlePhoto.jpg";
type Props = {
  className?: string;
};

function Party({ className }: Props) {
  return (
    <div className={className}>
      <motion.img
        src={coverImg}
        initial={{ height: 0, width: 0 }}
        animate={{ width: "100%", height: "100%" }}
        transition={{ duration: 6, type: "tween", ease: "easeIn" }}
        alt="a beautiful picture of Joshua Israel"
      />
      <Confetti delay={6000} length={3000} />
    </div>
  );
}

export default styled(Party).attrs({ className: Party.name })``;
