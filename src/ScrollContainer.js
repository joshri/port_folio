import React from "react";
import Project from "./Project";
import thumbnailPic from "./assets/images/ResumeThumbnail.png";
function ScrollContainer(props) {
  return (
    <div
      className="column min-width"
      style={{
        minWidth: "750px",
        width: "90vw",
        minHeight: "90vh",
        marginTop: "15vh",
      }}
    >
      {/* background stripes */}
      <div style={{ position: "relative", zIndex: 0 }}>
        <div
          className="shape scroll-stripe orange"
          style={{ height: "40vh" }}
        />
        <div
          className="shape scroll-stripe gold rotate-left"
          style={{ height: "40vh", top: "150vh" }}
        />
        <div
          className="shape scroll-stripe"
          style={{ height: "40vh", top: "350vh" }}
        />
      </div>
      {/* content */}

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
            Welcome to the #1 Website In The World For All Things Related to Me,
            Joshua Israel!
          </h6>
          <h6 className="about">
            I've been at Weaveworks since Oct. 2021 as a Software Engineer,
            working on an{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/weaveworks/weave-gitops"
            >
              open-source GitOps GUI
            </a>{" "}
            for Cloud Native developers and platform operators. It's the real
            deal - owning issues from conception and AC to merge, giving
            constructive code reviews, lots of asynchronous fully remote
            communication around the world, and tackling complex technical
            issues in the world of Kubernetes, all within the exciting chaos of
            a startup!
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
            I am, of course, happy to send a copy of the photo at the end of the
            party animation upon request.
          </h6>
        </div>
      </div>
      <div
        className="column"
        style={{
          position: "relative",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h1 className="resume">RESUME</h1>
        <div
          style={{
            width: "70vw",
            minWidth: 500,
            position: "relative",
            bottom: "5vh",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1Dw6gPNcTRa_0yJyf-DDf567JYG3buM3EuojG3wGZfrc/edit?usp=sharing"
          >
            <img
              alt="resume thumbnail"
              className="resumeThumb"
              style={{ cursor: "pointer" }}
              src={thumbnailPic}
            />
          </a>
          <svg
            width="40vw"
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
      </div>
      <div>
        <div
          className="column"
          style={{
            width: "40%",
            position: "relative",
            zIndex: 1,
            left: "5vw",
          }}
        >
          <div className="has-background column homeText">
            <div className="column" style={{ height: "100%" }}>
              <h6 className="about">
                I took a React Native + React + Redux app from an empty repo to
                deployed on both App Stores!
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
                concise Styled Components based on a Figma doc!
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
            <video
              style={{ width: "100%", marginTop: "20px" }}
              title={props.title}
              src={
                "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/SidecarDemoMovie.mp4"
              }
              type="video/mp4"
              autoPlay
              loop
              playsInline
              muted
            />
          </div>
        </div>
        <div
          className="column"
          style={{ width: "20vw", position: "relative", zIndex: 0.5 }}
        >
          <h1 className="bartab">B</h1>
          <h1 className="bartab">A</h1>
          <h1 className="bartab">R</h1>
          <h1 className="bartab">T</h1>
          <h1 className="bartab">A</h1>
          <h1 className="bartab">B</h1>
        </div>
        <div
          className="column"
          style={{
            width: "25%",
            position: "relative",
            zIndex: 0.5,
            right: "5vw",
          }}
        >
          <video
            style={{ width: "90%" }}
            title={props.title}
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/BartabOpenFinal3.mov"
            }
            type="video/mov"
            autoPlay
            loop
            playsInline
            muted
          />
          <div style={{ height: "20px" }}></div>
          <video
            style={{ width: "90%" }}
            title={props.title}
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/BartabUpdateGif.mp4"
            }
            type="video/mp4"
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
      </div>
      <div className="spacer" />
      <h1 className="projects">PROJECTS</h1>
      <div className="column" style={{ position: "relative" }}>
        <Project
          title="FOR ALL SEASONS"
          deployed="https://for-all-seasons.herokuapp.com"
          github="https://github.com/joshri/for-all-seasons"
          gif={
            "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/ForAllSeasonsGif.mp4"
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
            "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/FunkySimonGif.mp4"
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
            "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/IsItHotGif.mp4"
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
