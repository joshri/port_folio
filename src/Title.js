import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import title_photo from "./assets/images/TitlePhoto2.jpg";
import { motion } from "framer-motion";

function Title(props) {
  let [loaded, setLoaded] = useState(false);

  const audioTag = useRef(null);

  return (
    <section onLoad={window.scrollTo(0, 1)} className="titleContainer">
      <audio
        id="audio"
        ref={audioTag}
        preload="auto"
        onCanPlay={() => {
          // setLoaded(true);
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
        <div>
          <motion.div
            animate={{ borderColor: "black", opacity: 1 }}
            transition={{ duration: 2 }}
            className="row titleEdge"
            style={{
              borderBottom: "5px solid #ffcf3d",
              opacity: 0,
            }}
          >
            <h1 className="col zoom">MEET</h1>
            <h1 className="col zoom forYour">YOUR</h1>
            <h1 className="col zoom forNew">NEW</h1>
          </motion.div>

          <div
            className="nameContainer"
            style={{ height: props.adjustVh * 75 }}
          >
            <motion.div
              animate={{ scale: 3, opacity: 0 }}
              transition={{ delay: 17.5, duration: 0.5 }}
              className="skillsContainer"
            >
              <div className="row skillsRow">
                <h3 className="col skillsItem g" style={{ fontSize: "3.5vw" }}>
                  BOOTSTRAP
                </h3>
                <h3 className="col skillsItem c">HTML</h3>
                <h3 className="col skillsItem d">CSS</h3>
                <h3 className="col skillsItem h">SASS</h3>
              </div>
              <div className="row skillsRow">
                <h3 className="col skillsItem a">JAVASCRIPT</h3>
                <h3 className="col skillsItem b">REACT / NATIVE</h3>
              </div>
              <div className="row skillsRow">
                <h3 className="col skillsItem e">NODE</h3>
                <h3 className="col skillsItem i">PYTHON</h3>
                <h3 className="col skillsItem f">AWS</h3>
              </div>
            </motion.div>
            <motion.img
              animate={{ width: "75%", height: "75%", opacity: 1 }}
              transition={{ delay: 20, duration: 4 }}
              alt={"a handsome image of Joshua Israel"}
              src={title_photo}
              className="image"
            ></motion.img>
            <NavLink to="/home">
              <motion.Button
                style={{ display: "none", fontSize: "175%" }}
                className="link"
                animate={{ opacity: [0, 1], display: "flex" }}
                transition={{ duration: 2, delay: 24 }}
              >
                ENTER
              </motion.Button>
            </NavLink>
            <h1 className="title">JOSHUA</h1>
            <h1 className="title" style={{ animationDelay: "18.5s" }}>
              ISRAEL
            </h1>
          </div>
          <motion.div
            animate={{ borderColor: "black", opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              borderTop: "5px solid #ffcf3d",
              opacity: 0,
              height: props.adjustVh * 12.5,
            }}
            className="row titleEdge"
          >
            <h1 className="col zoom forBot">SOFTWARE</h1>
            <h1 className="col zoom forBot"> ENGINEER</h1>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Title;
