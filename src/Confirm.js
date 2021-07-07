import "./styles/_Confirm.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { setDisplay } from "./redux/displaySlice";

function Confirm(props) {
  const dispatch = useDispatch();
  return (
    <section>
      <motion.h1
        animate={{ fontSize: ["1vw", "15vw", "30vw"], opacity: [0, 1, 0] }}
        transition={{ duration: 3 }}
        className="welcome"
      >
        WELCOME
      </motion.h1>
      <div className="confirmText column">
        <motion.h6
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 2 }}
        >
          the next page has an animated introduction with autoplaying audio and
          is quite colorful.
        </motion.h6>
        <motion.h6
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 2 }}
        >
          If you're scared, press no party.
        </motion.h6>
        <motion.h6
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 2 }}
        >
          Otherwise, I'll see you in about thirty seconds.
        </motion.h6>
      </div>
      <div className="partyButtons column">
        <button
          className="bigButt"
          onClick={() => dispatch(setDisplay("party"))}
        >
          PARTY!
        </button>
        <button onClick={() => dispatch(setDisplay("home"))}>no party.</button>
      </div>
    </section>
  );
}

export default Confirm;
