import React from "react";
import liImage from "./assets/images/LI-In-Bug.png";
import ScrollContainer from "./ScrollContainer";

function Home(props) {
  return (
    <section style={{ flexDirection: "row", background: "transparent" }}>
      {/* sidebar */}
      <div className="homeSidebar">
        <div
          style={{
            minWidth: "80%",
            minHeight: "100vh",
            borderRight: "2px solid black",
          }}
        ></div>
        <div
          style={{
            minWidth: "5%",
            minHeight: "100vh",
            borderRight: "3.5px solid black",
          }}
        ></div>
      </div>
      {/* main */}
      <div className="homeContainer min-width">
        {/* header */}
        <div className="headerContainer min-width">
          <div className="column" style={{ width: "50%" }}>
            <h1 style={{ width: "100%" }}>JOSHUA ISRAEL</h1>
            <h6 style={{ width: "100%" }}>FRONT-END DEVELOPER</h6>
          </div>
          <div style={{ width: "40%", justifyContent: "center" }}>
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
            style={{ width: "20%" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joshri"
          >
            <img
              alt="LinkedIn"
              style={{ width: 50, height: 40 }}
              src={liImage}
            />
          </a>
        </div>
        {/* content */}
        <ScrollContainer />
      </div>
    </section>
  );
}

export default Home;
