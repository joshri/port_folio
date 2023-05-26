import React, { useState } from "react";
import ScrollContainer from "./ScrollContainer";
import head from "./assets/images/HeadshotHead.png";
import liImage from "./assets/images/LI-In-Bug.png";
import ghImage from "./assets/images/github-mark.png";

function Home(props) {
  let [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <section
      style={{
        flexDirection: "row",
        background: "transparent",
        cursor: "none",
      }}
      onMouseMove={(e) => {
        setMouse({ x: e.clientY, y: e.clientX });
      }}
    >
      {/* mouse tracking icon */}
      <div
        className="mouse-border"
        style={{ top: mouse.x - 25, left: mouse.y - 25 }}
      >
        <div className="mouse-border layer-two">
          <div className="mouse-border inner" style={{ width: 40, height: 40 }}>
            <img alt="headshot-cursor" src={head} className="mouseHead" />
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="homeSidebar column">
        {/* background shapes */}
        <div
          className="shape sidebar-stripe yurple rotate-left"
          style={{ height: "30vh", width: "1000%" }}
        />
        <div
          className="shape sidebar-stripe gold"
          style={{ bottom: "20vh", height: "15vh" }}
        />
        <div
          className="shape sidebar-stripe orange "
          style={{ bottom: "10vh" }}
        />
        <div
          className="shape sidebar-stripe lime rotate-left"
          style={{ width: "500%", height: "25vh" }}
        />
        <div
          className="shape sidebar-stripe yurple"
          style={{ bottom: "5vh", width: "500%" }}
        />
        <div className="shape sidebar-stripe rotate-left" />
      </div>

      {/* main */}
      <div className="homeContainer min-width">
        {/* header */}
        <div className="headerContainer min-width">
          {/* background shapes */}
          <div
            className="shape header-stripe"
            style={{ left: 0, width: "50%" }}
          />
          <div
            className="shape header-stripe orange"
            style={{ left: 0, width: "3%" }}
          />
          <div
            className="shape header-stripe yurple rotate-left"
            style={{ left: "50%" }}
          />
          <div
            className="shape header-stripe orange rotate-left"
            style={{ left: "85%", width: "15%", height: "500%" }}
          />
          <div className="shape header-stripe lime" style={{ left: "45%" }} />
          <div
            className="shape header-stripe gold"
            style={{ left: "55%", width: "25%", height: "600%" }}
          />
          {/* actual header content */}
          <div style={{ width: "100%", justifyContent: "start" }}>
            <div className="column" style={{ paddingLeft: "5%" }}>
              <h1 style={{ width: "100%" }}>JOSHUA ISRAEL</h1>
              <h6 style={{ width: "100%" }}>SOFTWARE ENGINEER</h6>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/joshri"
              style={{ marginLeft: "32px" }}
            >
              <img
                alt="GitHub"
                style={{
                  width: "2.5vw",
                  height: "100%",
                  minWidth: 50,
                }}
                src={ghImage}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/joshri"
              style={{ marginLeft: "32px" }}
            >
              <img
                alt="LinkedIn"
                style={{
                  width: "2.5vw",
                  height: "100%",
                  minWidth: 50,
                }}
                src={liImage}
              />
            </a>
          </div>
        </div>
        {/* portfolio content */}
        <ScrollContainer />
      </div>
    </section>
  );
}

export default Home;
