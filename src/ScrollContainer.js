import React, { useState } from "react";
import thumbnailPic from "./assets/images/ResumeThumbnail.png";
import res from "./assets/images/Resume.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Project from "./Project";
import ForAllSeasons from "./assets/video/ForAllSeasonsGif.mp4";
import FunkySimon from "./assets/video/FunkySimonGif.mp4";
import IsItHot from "./assets/video/IsItHotGif.mp4";
import Sidecar from "./assets/video/SidecarDemoMovie.mp4";
import BartabOpen from "./assets/video/BartabOpenFinal3.mov";
import BartabUpdate from "./assets/video/BartabUpdateGif.mp4";

function ScrollContainer(props) {
  let [resFull, setResFull] = useState(false);

  let pSize = 0;
  let resume = 0;
  let thumbnail = 0;

  if (window.screen.width > 812) {
    pSize = "1vw";
    resume = "400%";
    thumbnail = "200px";
  } else {
    pSize = "2vw";
    resume = "200%";
    thumbnail = "128px";
  }

  return (
    <div style={{ width: "100%", height: "100%", overflow: "scroll" }}>
      <Modal size="xl" centered show={resFull}>
        <Modal.Body style={{ justifyContent: "center", alignItems: "center" }}>
          <img
            alt="Full Resume"
            src={res}
            style={{ height: "100%", width: "100%", zIndex: -10 }}
          ></img>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="outline-dark" onClick={() => setResFull(false)}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="scrollItem">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20vh",
          }}
        >
          <h1 className="scrollTitle rotate">ABOUT</h1>
          <p
            style={{
              opacity: 1,
              fontSize: pSize,
              width: "50%",
              padding: "15px",
              border: "2px solid black",
            }}
          >
            Welcome to my Internet House! You've got everything you could ever
            want right here at your fingertips. The Res. The Projects. The email
            and social links. The only thing that's missing is another look at
            that photo from the intro, which I am happy to send on request.
            <br></br>
            <br></br>Seriously though - I love creating, I love learning, and I
            used to be paid to sing and dance in front of thousands of people
            eight times a week - or as I like to call it now, "giving
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
        <h1 className="scrollTitle" style={{ fontSize: resume }}>
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
            style={{ height: thumbnail, width: thumbnail }}
            src={thumbnailPic}
            onClick={() => setResFull(true)}
          />
        </div>
      </div>

      <div className="scrollItem">
        <h1
          style={{
            fontSize: resume,
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
          <video
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
          ></video>
        </div>
        <p
          style={{
            opacity: 1,
            fontSize: pSize,
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
            fontSize: resume,
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
      <div style={{ height: "20vh" }}></div>
    </div>
  );
}

export default ScrollContainer;
