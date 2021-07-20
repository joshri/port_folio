import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import title_photo from "./assets/images/TitlePhoto2.jpg";
import { motion } from "framer-motion";

import { createNameLayer } from "./utils";

function Title(props) {
  let [loaded, setLoaded] = useState(false);
  let [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => setDisabled(false), 25000);
  });

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
          "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/audio/PortfolioThemeLowest.mp3"
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
          <Link to="/"> back to the start</Link>
          <Link to="/home">onward to the portfolio</Link>
        </div>
      ) : (
        <div className="column">
          {/* top */}
          <div className="titleEdge" style={{ borderTop: "none" }}>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.25] }}
              transition={{ delay: 2 }}
            >
              MEET
            </motion.h1>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.25] }}
              transition={{ delay: 4 }}
            >
              YOUR
            </motion.h1>
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.25] }}
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

            <motion.h1
              style={{
                top: "12.5vh",
                bottom: "12.5vh",
              }}
              animate={{
                scale: [1, 1.25, 1.5, 1.75, 2, 3],
                opacity: [0, 0.25, 0.5, 1, 0],
              }}
              transition={{ duration: 5.5, delay: 5, ease: "linear" }}
            >
              JOSHUA ISRAEL
            </motion.h1>
            <motion.h1
              style={{
                position: "absolute",
                fontSize: "40vw",
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
            {/* skills layer */}
            <div className="column skillsContainer">
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 9 }}
                className="skills"
              >
                REACT
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 10 }}
                className="skills"
              >
                REACT NATIVE
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 11 }}
                className="skills"
              >
                REDUX
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 12 }}
                className="skills"
              >
                JAVASCRIPT
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 13 }}
                className="skills"
              >
                HTML
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 13.5 }}
                className="skills"
              >
                CSS
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 14 }}
                className="skills"
              >
                SASS
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 14.5 }}
                className="skills"
              >
                STYLED COMPONENTS
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 15 }}
                className="skills"
              >
                BOOTSTRAP
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 15.25 }}
                className="skills"
              >
                GIT
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 15.75 }}
                className="skills"
              >
                REST API
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 16 }}
                className="skills"
              >
                NODE
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 16.25 }}
                className="skills"
              >
                PYTHON
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 16.5 }}
                className="skills"
              >
                XCODE
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 16.75 }}
                className="skills"
              >
                ANDROID STUDIO
              </motion.h1>
              <motion.h1
                animate={{ translateX: ["100vw", "0vw", "-100vw"] }}
                transition={{ duration: 2, delay: 17 }}
                className="skills"
              >
                PLUS HE'S COOL, FUN, AND OBJECTIVELY BEAUTIFUL!
              </motion.h1>
              <motion.img
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: "1500px",
                  height: "75%",
                  border: "5px solid black",
                  borderRadius: "10%",
                  animation: "colorChange 4s 18s linear infinite",
                }}
                src={title_photo}
                animate={{ opacity: [0, 1, 1, 1], scale: [0.25, 0.5, 0.75, 1] }}
                transition={{ duration: 4, delay: 22, ease: "linear" }}
              />
              <Link to="/home">
                <motion.button
                  className="bigButt titleButton"
                  disabled={disabled}
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 1, delay: 26 }}
                >
                  ENTER
                </motion.button>
              </Link>
            </div>
          </div>
          {/* bottom */}
          <div
            className="titleEdge"
            style={{ borderBottom: "none", top: "87.5vh" }}
          >
            <motion.h1
              className="titleHeaders"
              animate={{ opacity: [0, 1], scale: [4, 1.25] }}
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
