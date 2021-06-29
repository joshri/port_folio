import React from "react";

function Project(props) {
  let pSize = 0;
  let thumbnail = 0;
  let projectTitle = 0;
  let projectLink = 0;

  if (window.screen.width > 812) {
    pSize = "1vw";
    thumbnail = "200px";
    projectTitle = "200%";
    projectLink = "100%";
  } else {
    pSize = "2vw";
    thumbnail = "128px";
    projectTitle = "100%";
    projectLink = "50%";
  }

  return (
    <div className="scrollItem projectContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: projectTitle }} className="scrollTitle2 ">
          {props.title}
        </h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: projectLink }}
          href={props.deployed}
        >
          {props.deployed}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: projectLink }}
          href={props.github}
        >
          github repo
        </a>
        <video
          title={props.title}
          style={{ width: thumbnail, height: thumbnail }}
          src={props.gif}
          type="video/mp4"
          autoPlay
          loop
          className="giphy-embed"
          allowFullScreen
          muted
        ></video>
      </div>
      <ul
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: pSize,
        }}
        className="project"
      >
        {props.bullets.map((bullet) => {
          return <li key={props.bullets.indexOf(bullet)}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}

export default Project;
