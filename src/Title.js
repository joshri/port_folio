import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import title_photo from "./assets/images/TitlePhoto2.jpg";
import { motion } from "framer-motion";

import { createNameLayer } from "./utils";

function Title(props) {
  let [loaded, setLoaded] = useState(false);

  const audioTag = useRef(null);

  const innerWidth = window.innerWidth;

  return (
    <section style={{ minWidth: innerWidth }}>
      <audio
        id="audio"
        ref={audioTag}
        preload="auto"
        onCanPlay={() => {
          setLoaded(true);
          audioTag.current.play();
        }}
        src={
          "https://raw.githubusercontent.com/joshri/port_folio/master/src/audio/PortfolioThemeLowest.mp3"
        }
      />
      {!loaded ? (
        <div style={{ height: "25%" }} className="column">
          <h1>LOADING</h1>
          <h6>Stuck? Give it a second.</h6>
          <h6>
            On mobile? Try this:{" "}
            <button
              onClick={() => {
                setLoaded(true);
                audioTag.current.play();
              }}
            >
              play?
            </button>
          </h6>
          <NavLink to="/"> back to the start</NavLink>
          <NavLink to="/home">onward to the portfolio</NavLink>
        </div>
      ) : (
        <div className="column">
          {/* top */}
          <div className="titleEdge" style={{ borderTop: "none" }}>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.5] }}
              transition={{ delay: 2 }}
            >
              MEET
            </motion.h1>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.5] }}
              transition={{ delay: 4 }}
            >
              YOUR
            </motion.h1>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.5] }}
              transition={{ delay: 6 }}
            >
              NEW
            </motion.h1>
          </div>
          {/* center */}
          <div className="titleCenter">
            {/* name layer */}
            {createNameLayer().map((style, index) => {
              return (
                <motion.h1
                  key={index}
                  style={{
                    position: "absolute",
                    top: `${style.top}vh`,
                    left: `${style.left}vh`,
                    fontSize: style.fontSize,
                    color: style.color,
                    opacity: 0,
                  }}
                  animate={{
                    scale: [0.75, 0.25],
                    opacity: [0, 1, 0],
                    rotate: style.rotate,
                  }}
                  transition={{
                    delay: style.animationDelay,
                    duration: style.animationDuration,
                  }}
                >
                  JOSHUA ISRAEL
                </motion.h1>
              );
            })}
            {/* skills layer */}
            <div
              className="column"
              style={{ position: "absolute", background: "transparent" }}
            >
              <div>
                <motion.h1>REACT</motion.h1>

                <motion.h1>REACT NATIVE</motion.h1>
              </div>
              <div>
                <motion.h1>HTML</motion.h1>
                <motion.h1>CSS</motion.h1>
              </div>
              <div>
                <motion.h1>JAVASCRIPT</motion.h1>
                <motion.h1>REDUX</motion.h1>
              </div>
              <motion.h1>SASS</motion.h1>
              <motion.h1>GIT</motion.h1>
              <motion.h1></motion.h1>
            </div>
          </div>
          {/* bottom */}
          <div
            className="titleEdge"
            style={{ borderBottom: "none", top: "87.5vh" }}
          >
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.5] }}
              transition={{ delay: 8 }}
            >
              FRONTEND ENGINEER
            </motion.h1>
          </div>
        </div>
      )}
    </section>
  );
}

export default Title;
