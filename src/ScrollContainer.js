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
import { withRouter } from "react-router";

function ScrollContainer(props) {
  let [resFull, setResFull] = useState("none");

  return (
    <div
      className="column min-width"
      style={{
        minWidth: "90vw",
        minHeight: "90vh",
        marginTop: "10vh",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
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
      <div
        className="column min-width"
        style={{ minHeight: "100%", width: "100%" }}
      >
        <h1
          className="about"
          style={{
            transform: "rotate(90deg)",
            marginTop: "70%",
            marginRight: "70%",
          }}
        >
          ABOUT
        </h1>
        <div style={{ minHeight: "40vh" }} />
        <h1 className="resume" style={{}}>
          RESUME
        </h1>

        <h1 style={{ letterSpacing: "5vw" }}>BARTAB</h1>
      </div>
      {/* foreground layer */}
      <div
        className="column min-width"
        style={{
          position: "relative",
          bottom: "",
          minHeight: "100%",
          width: "100%",
          zIndex: 2,
        }}
      >
        <div
          className="has-background column"
          style={{
            padding: "3%",
            height: "80vh",
            minWidth: "250px",
            width: "50%",
            border: "3px solid black",
            borderRadius: "20px",
            zIndex: 4,
            marginLeft: "20vw",
          }}
        >
          <div
            className="column"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <h6 className="about">
              Welcome to the #1 Website In The World For All Things Related To
              Me, Joshua Israel!
            </h6>
            <h6 className="about">
              Once, in an interview, I was asked, "Are you always this happy
              when you code?"
            </h6>
            <h6 className="about">I said, "Yes."</h6>
            <h6 className="about">
              I also said, "That's going right on my website."
            </h6>
            <h6 className="about">
              From 2016-2020, I was paid to sing and dance live in front of
              thousands of people eight times a week - or as I like to call it
              now, "giving presentations". Now, I use the same creativity and
              energy to create a slightly different user-facing experience. I
              use Javascript instead of my actual human body, but it's basically
              the same.
            </h6>
            <h6 className="about">
              I've got React (Redux, Hooks), React Native (XCode, Android
              Studio), Javascript (ES6), CSS (SASS, Styled Components,
              Bootstrap), HTML, and a dash of Python and Node in my toolbox...SO
              FAR. I used to be an actor okay? I'm willing to learn something
              new!
            </h6>
            <h6 className="about">
              I am, of course, happy to send a copy of the photo at the end of
              the party animation upon request.
            </h6>
          </div>
        </div>
        <div style={{ height: "20vh" }} />
        <div>
          <svg
            width="30vw"
            height="30vh"
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
      <div style={{ height: "50vh" }}>
        <video
          style={{ width: "50%", height: "100%" }}
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
          style={{ width: "50%", height: "100%" }}
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
      <video
        style={{ width: "100%", height: "30vh" }}
        title={props.title}
        src={Sidecar}
        type="video/mp4"
        autoPlay
        loop
        className="giphy-embed"
        allowFullScreen
        muted
      ></video>

      {/* 
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
        </div> */}
    </div>
  );
}

export default ScrollContainer;
