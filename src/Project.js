import React from "react";

function Project(props) {
  return (
    <div
      className="column"
      style={{
        justifyContent: "center",
        minWidth: "100%",
        margin: "5vh 0 5vh 0",
      }}
    >
      <div style={{ width: "80%" }}>
        <h3 style={{}} className="scrollTitle2 ">
          {props.title}
        </h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{}}
          href={props.deployed}
        >
          {props.deployed}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{}}
          href={props.github}
        >
          github repo
        </a>
      </div>
      <div className="has-background projectContainer">
        <video
          title={props.title}
          style={{ width: "50%" }}
          src={props.gif}
          type="video/mp4"
          autoPlay
          loop
          className="giphy-embed"
          allowFullScreen
          muted
        />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            width: "40%",
            minHeight: "24vh",
          }}
        >
          {props.bullets.map((bullet) => {
            return <li key={props.bullets.indexOf(bullet)}>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Project;
