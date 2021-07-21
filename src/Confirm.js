import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Confirm(props) {
  let [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setTimeout(() => setDisabled(false), 5000);
  });
  return (
    <motion.section
      style={{ justifyContent: "center", opacity: 0 }}
      animate={{ opacity: 1 }}
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
      >
        <Link to="/party">
          <button disabled={disabled} className="bigButt">
            PARTY!
          </button>
        </Link>
        <Link to="/home">
          <button disabled={disabled}>no party.</button>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Confirm;
