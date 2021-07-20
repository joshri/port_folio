import React, { useState } from "react";
import thumbnailPic from "./assets/images/ResumeThumbnail.png";
import res from "./assets/images/Resume.jpg";
import Project from "./Project";
import ForAllSeasons from "./assets/video/ForAllSeasonsGif.mp4";
import FunkySimon from "./assets/video/FunkySimonGif.mp4";
import IsItHot from "./assets/video/IsItHotGif.mp4";
import Sidecar from "./assets/video/SidecarDemoMovie.mp4";

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
      {/* content... */}
      <div className=" min-width " style={{ display: "block", width: "100%" }}>
        <h1 className="about">ABOUT</h1>
      </div>
      <div className="has-background column homeText about">
        <div
          className="column"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <h6 className="about">
            Welcome to the #1 Website In The World For All Things Related To Me,
            Joshua Israel!
          </h6>
          <h6 className="about">
            Once, in an interview, I was asked, "Are you always this happy when
            you code?"
          </h6>
          <h6 className="about">I said, "Yes."</h6>
          <h6 className="about">
            I also said, "That's going right on my website."
          </h6>
          <h6 className="about">
            From 2016-2020, I was paid to sing and dance live in front of
            thousands of people eight times a week - or as I like to call it
            now, "giving presentations". Now, I use the same creativity and
            energy to create a slightly different user-facing experience. I use
            Javascript instead of my actual human body, but it's basically the
            same.
          </h6>
          <h6 className="about">
            I've got React (Redux, Hooks), React Native (XCode, Android Studio),
            Javascript (ES6), CSS (SASS, Styled Components, Bootstrap), HTML,
            and a dash of Python and Node in my toolbox...SO FAR. I used to be
            an actor okay? I'm willing to learn something new!
          </h6>
          <h6 className="about">
            I am, of course, happy to send a copy of the photo at the end of the
            party animation upon request.
          </h6>
        </div>
      </div>
      <h1 className="resume" style={{}}>
        RESUME
      </h1>
      <div>
        <img
          alt="resume thumbnail"
          className="resumeThumb"
          style={{ cursor: "pointer" }}
          src={thumbnailPic}
          onClick={() => setResFull("block")}
        />
        <svg
          width="30vw"
          height="30vh"
          viewBox="0 0 16 16"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <div className="spacer" />

      <div
        style={{
          minWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="column" style={{ width: "40%", minHeight: "100vh" }}>
          <div className="has-background column homeText">
            <div className="column" style={{ height: "100%" }}>
              <h6 className="about">
                I brought this React Native + React + Redux app from zero to
                approved by Apple and in beta on TestFlight, and running
                beautifully on Android!
              </h6>
              <h6 className="about">
                Using Stripe, Estimote Bluetooth proximity beacons, and our own
                REST API, you can walk into any Bartab location, open a tab, and
                turn your phone off - we handle the rest!
              </h6>
              <h6 className="about">
                I typed every single line of Front-End code here with my bare
                hands - from creating every asynchronous API call and error
                handling with Redux, to creating every single UI element with
                concise Styled Components!
              </h6>
              <h6 className="about">
                What you're seeing below is the web app component of Bartab,
                created with React, Redux, Bootstrap, and SASS. It functions (so
                far) as our own POS service so we can hold our own events for
                testing purposes. It's been testing in LA and is looking for
                funding! I'm really proud of everything I accomplished over the
                course of seven months of work.
              </h6>
            </div>
          </div>
          <video
            style={{ width: "100%", marginTop: "20px" }}
            title={props.title}
            src={
              "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/SidecarDemoMovie.mp4"
            }
            type="video/mp4"
            autoPlay
            loop
            allowFullScreen
            muted
          />
        </div>
        <div className="column" style={{ width: "10vw" }}>
          <h1 className="bartab">B</h1>
          <h1 className="bartab">A</h1>
          <h1 className="bartab">R</h1>
          <h1 className="bartab">T</h1>
          <h1 className="bartab">A</h1>
          <h1 className="bartab">B</h1>
        </div>
        <div className="column" style={{ width: "30%" }}>
          <video
            style={{ width: "90%" }}
            title={props.title}
            src={
              "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/BartabOpenFinal3.mov"
            }
            type="video/mov"
            autoPlay
            loop
            allowFullScreen
            muted
          />
          <div className="spacer" />
          <video
            style={{ width: "90%" }}
            title={props.title}
            src={
              "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/BartabUpdateGif.mp4"
            }
            type="video/mp4"
            autoPlay
            loop
            allowFullScreen
            muted
          />
        </div>
      </div>
      <h1 className="projects">PROJECTS</h1>
      <div className="column" style={{ position: "relative" }}>
        <Project
          title="FOR ALL SEASONS"
          deployed="https://for-all-seasons.herokuapp.com"
          github="https://github.com/joshri/for-all-seasons"
          gif={
            "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/ForAllSeasonsGif.mp4"
          }
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
          gif={
            "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/FunkySimonGif.mp4"
          }
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
          gif={
            "https://amplify-amplify467c9d8658174-staging-200829-deployment.s3.amazonaws.com/IsItHotGif.mp4"
          }
          bullets={[
            "7 free APIs provide the data for my weather app/endless source of joy",
            "Function and Class Components with State and React Hooks",
            "Styled Components for a reusable button that refreshes the API call.",
          ]}
        />
      </div>
    </div>
  );
}

export default ScrollContainer;
