import React, { useState } from "react";
import thumbnailPic from "./assets/images/ResumeThumbnail.png";
import res from "./assets/images/Resume.jpg";
import Button from "react-bootstrap/Button";
import Project from "./Project";
import ForAllSeasons from "./assets/video/ForAllSeasonsGif.mp4";
import FunkySimon from "./assets/video/FunkySimonGif.mp4";
import IsItHot from "./assets/video/IsItHotGif.mp4";
import Sidecar from "./assets/video/SidecarDemoMovie.mp4";
import BartabOpen from "./assets/video/BartabOpenFinal3.mov";
import BartabUpdate from "./assets/video/BartabUpdateGif.mp4";

function ScrollContainer(props) {
  let [resFull, setResFull] = useState("none");

  return (
    <div
      className="column"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    >
      {/* resume modal TODO: link to Google Doc or Download */}
      <div
        style={{
          display: resFull,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          border: "3px solid black",
          zIndex: 5,
        }}
      >
        <div className="column">
          <img
            alt="Full Resume"
            src={res}
            style={{
              height: "80%",
              width: "80%",
              marginTop: 20,
              borderRadius: 15,
            }}
          ></img>

          <button
            style={{ position: "absolute", top: 30, right: "12.5%" }}
            onClick={() => setResFull("none")}
          >
            X
          </button>
        </div>
      </div>
      {/* background layer */}
      <div style={{ position: "absolute", top: "20%", left: "10%", zIndex: 0 }}>
        <h1 style={{ transform: "rotate(90deg)", fontSize: "100px" }}>ABOUT</h1>
      </div>
      {/* foreground layer */}
      <div
        className="column"
        style={{
          position: "relative",
          background: "transparent",
          zIndex: 3,
        }}
      >
        <div className="scrollItem">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20vh",
            }}
          >
            <p
              style={{
                opacity: 1,

                width: "50%",
                padding: "15px",
                border: "2px solid black",
              }}
            >
              Welcome to my Internet House! You've got everything you could ever
              want right here at your fingertips. The only thing that's missing
              is another look at that photo from the intro, which I am happy to
              send on request.
              <br></br>
              <br></br>Seriously though - I love creating, I love learning, and
              I used to be paid to sing and dance in front of thousands of
              people eight times a week - or as I like to call it now, "giving
              presentations".<br></br>
              <br></br>Yes, I actually like talking to people and giving
              presentations. So if you need that, Or:<br></br>
              <br></br>
              React (Redux, Hooks), React Native (XCode, Android Studio),
              Javascript, CSS (SASS, Styled Components, Bootstrap), HTML, or
              perhaps even a little Python or Node...
              <br></br>
              <br></br>Let's make something together!<br></br>
              <br></br>
            </p>
          </div>
        </div>

        <div className="scrollItem">
          <h1 className="scrollTitle" style={{}}>
            RESUME
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <svg
              width="30%"
              height="30%"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
            <img
              alt="resume thumbnail"
              className="resumeThumb"
              style={{ cursor: "pointer" }}
              src={thumbnailPic}
              onClick={() => setResFull("block")}
            />
          </div>
        </div>

        <div className="scrollItem">
          <h1
            style={{
              marginBottom: "100px",
            }}
            className="scrollTitle"
          >
            BARTAB
          </h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            {" "}
            {/* <video
              title={props.title}
              src={BartabOpen}
              type="video/mov"
              autoPlay
              loop
              className="giphy-embed"
              allowFullScreen
              muted
            ></video>
            <video
              title={props.title}
              src={BartabUpdate}
              type="video/mp4"
              autoPlay
              loop
              className="giphy-embed"
              allowFullScreen
              muted
            ></video>
          </div>
          <div>
            <video
              title={props.title}
              src={Sidecar}
              type="video/mp4"
              autoPlay
              loop
              className="giphy-embed"
              allowFullScreen
              muted
            ></video> */}
          </div>
          <p
            style={{
              opacity: 1,

              width: "50%",
              padding: "15px",
              border: "2px solid black",
            }}
          >
            January 2021 - Present <br></br>
          </p>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <h1
            style={{
              marginBottom: "100px",
            }}
            className="scrollTitle"
          >
            PROJECTS
          </h1>
          <div id="forallseasons"></div>
          <Project
            title="FOR ALL SEASONS"
            deployed="https://for-all-seasons.herokuapp.com"
            github="https://github.com/joshri/for-all-seasons"
            gif={ForAllSeasons}
            bullets={[
              "Filters an artist's 50 most popular songs on Spotify using their API to create four playlists representing the four seasons that you can save to your Spotify account!",
              "Functional use of a billion Spotify API endpoints, from authentication to changing user data",
              "Built-in audio player in your browser using the Spotify Web Player SDK",
              "Layered API calls with useEffect allow for any artist to be typed in - changing all the data",
            ]}
          />
          <div id="funkysimon"></div>
          <div className="between"></div>
          <Project
            title="FUNKY SIMON"
            deployed="https://joshri.github.io/funky-simon"
            github="https://github.com/joshri/funky-simon"
            gif={FunkySimon}
            bullets={[
              "Fully functional Simon game website - Increasing difficulty with round number and high score",
              "setTimeouts galore to add bonus rhythm element indicated by CSS along with funky animation",
              "HTML audio element uses my stunning GarageBand work in game, along with a soundboard!",
              "Hardcoded HTML and CSS animated background!",
            ]}
          />
          <div className="between"></div>
          <div id="isithot"></div>
          <Project
            title="IS IT HOT"
            deployed="https://is-it-hot-daily.herokuapp.com"
            github="https://github.com/joshri/is-it-hot"
            gif={IsItHot}
            bullets={[
              "7 free APIs provide the data for my weather app/endless source of joy",
              "Function and Class Components with State and React Hooks",
              "Styled Components for a reusable button that refreshes the API call.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollContainer;
