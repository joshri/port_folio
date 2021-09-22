import React, { useState } from "react";
import liImage from "./assets/images/LI-In-Bug.png";
import ScrollContainer from "./ScrollContainer";
import head from "./assets/images/HeadshotHead.png";

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
          <div className="column" style={{ width: "50%" }}>
            <h1 style={{ width: "100%" }}>JOSHUA ISRAEL</h1>
            <h6 style={{ width: "100%" }}>FRONT-END DEVELOPER</h6>
          </div>
          <div style={{ width: "35%", justifyContent: "center" }}>
            <svg
              width="2.5vw"
              height="50%"
              viewBox="0 0 16 16"
              className="bi bi-envelope"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
              />
            </svg>
            <h6 style={{ marginLeft: "5px" }}>joshisrael93@gmail.com</h6>
          </div>

          <a
            style={{ width: "15%" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joshri"
          >
            <img
              alt="LinkedIn"
              style={{
                width: "50%",
                height: "100%",
                maxHeight: 50,
                maxWidth: 50,
              }}
              src={liImage}
            />
          </a>
        </div>
        {/* portfolio content */}
        <ScrollContainer />
      </div>
    </section>
  );
}

export default Home;
