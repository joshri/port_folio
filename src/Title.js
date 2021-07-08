import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import title_photo from "./assets/images/TitlePhoto2.jpg";
import { motion } from "framer-motion";

import { createNameLayer } from "./utils";

function Title(props) {
  let [loaded, setLoaded] = useState(false);

  const audioTag = useRef(null);

  return (
    <section className="titleContainer">
      <audio
        id="audio"
        ref={audioTag}
        preload="auto"
        onCanPlay={() => {
          setLoaded(true);
          // audioTag.current.play();
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
          <div className="titleEdge" style={{ borderTop: "none" }}></div>
          {/* center */}
          <div>
            {/* name layer */}
            <div
              style={{
                top: "12.5vh",
                height: "75vh",
                width: "100vw",
                background: "transparent",
              }}
            >
              {createNameLayer().map((style) => {
                return (
                  <motion.h1
                    style={{
                      position: "absolute",
                      top: `${style.top}vh`,
                      left: `${style.left}vh`,
                      fontSize: style.fontSize,
                      color: style.color,
                      opacity: 0,
                    }}
                    animate={{ opacity: [0, 1, 0], rotate: style.rotate }}
                    transition={{
                      delay: style.animationDelay,
                      duration: style.animationDuration,
                    }}
                  >
                    JOSHUA ISRAEL
                  </motion.h1>
                );
              })}
            </div>
          </div>
          {/* bottom */}
          <div
            className="titleEdge"
            style={{ borderBottom: "none", top: "87.5vh" }}
          ></div>
        </div>
      )}
    </section>
  );
}

export default Title;
