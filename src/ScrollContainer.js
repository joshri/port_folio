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
          overflow: "scroll",
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
        className=" min-width "
        style={{ display: "block", height: "300vh", width: "100%" }}
      >
        <h1
          className="about"
          style={{
            transform: "rotate(90deg)",
            marginRight: "70vw",
          }}
        >
          ABOUT
        </h1>
        <div style={{ minHeight: "90vh" }} />
        <h1 className="resume" style={{}}>
          RESUME
        </h1>
        <div style={{ minHeight: "60vh" }} />
        <h1 className="bartab">BARTAB</h1>
        <h1 style={{}}>PROJECTS</h1>
      </div>
      {/* foreground layer */}
      <div
        className="column min-width"
        style={{
          position: "relative",
          bottom: "285vh",
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
        <div style={{ minHeight: "50vh" }} />
        <div>
          <svg
            width="30vw"
            height="30vh"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
            fill="black"
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
        <div style={{ minHeight: "30vh" }} />
        <div
          className="has-background column"
          style={{
            height: "100vh",
            padding: "5px",
            borderTop: "3px solid black",
            borderBottom: "3px solid black",
          }}
        >
          <div style={{ height: "75%", width: "100%" }}>
            <video
              style={{ width: "25%", height: "100%" }}
              title={props.title}
              src={BartabOpen}
              type="video/mov"
              autoPlay
              loop
              allowFullScreen
              muted
            />
            <div className="column" style={{ width: "25%" }}>
              <p>
                I brought this React Native + React + Redux app from zero to
                approved by Apple and in beta on TestFlight, and running
                beautifully on Android!<br></br>
                <br></br>Using Stripe, Estimote Bluetooth proximity beacons, and
                our own REST API, you can walk into any Bartab location, open a
                tab, and turn your phone off - we handle the rest!<br></br>
                <br></br>I typed every single line of Front-End code here with
                my bare hands - from creating every asynchronous API call and
                error handling with Redux and having Bluetooth run in the
                background, to creating every single UI element with concise
                Styled Components!
                <br></br>
                <br></br>
                What you're seeing below is the web app component of Bartab,
                created with React, Redux, Bootstrap, and SASS. It functions (so
                far) as our own POS service so we can hold our own events for
                testing purposes. It's been testing in LA and is looking for
                funding! I'm really proud of everything I accomplished over the
                course of seven months of work.
              </p>
            </div>
            <video
              style={{ width: "25%", height: "100%" }}
              title={props.title}
              src={BartabUpdate}
              type="video/mp4"
              autoPlay
              loop
              allowFullScreen
              muted
            />
          </div>
          <video
            style={{ width: "100%", height: "30vh" }}
            title={props.title}
            src={Sidecar}
            type="video/mp4"
            autoPlay
            loop
            allowFullScreen
            muted
          />
        </div>
        <div className="spacer" />
        <div className="column" style={{}}>
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
