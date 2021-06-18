import React, { useRef } from "react";
import instaImage from "./images/glyph-logo_May2016.png";
import liImage from "./images/LI-In-Bug.png";
import ScrollContainer from "./ScrollContainer";
import ScrollIntoView from "react-scroll-into-view";
import { motion } from "framer-motion";

import { Container, Row, Col, Nav, Image, NavItem } from "react-bootstrap";

function Home(props) {
  let scalePercent = 0;
  let navFont = 0;
  if (window.screen.width > 812) {
    scalePercent = 350;
    navFont = "1.8vw";
  } else {
    scalePercent = 150;
    navFont = "1.5vh";
  }

  const scrollRef = useRef(null);

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container fluid>
        <Row style={{ minHeight: "100%" }}>
          <Col
            className="sidebar"
            sm="auto"
            style={{
              borderRight: "5px solid black",
              minHeight: "110vh",
              padding: "2px",
              width: "15%",
            }}
          >
            <div style={{ height: "15vh" }}></div>
            <Nav
              style={{ height: "85vh" }}
              variant="pills"
              className="flex-column"
            >
              <NavItem
                onClick={() => {
                  scrollRef.current.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                style={{ fontSize: navFont }}
              >
                About
              </NavItem>
              <ScrollIntoView selector="#resume">
                <NavItem style={{ fontSize: navFont }}>Resume</NavItem>
              </ScrollIntoView>
              <ScrollIntoView selector="#projects">
                <NavItem style={{ fontSize: navFont }}>Projects:</NavItem>
              </ScrollIntoView>

              <NavItem
                className="navItem2"
                style={{ fontSize: navFont, marginTop: "5px" }}
              >
                - For All Seasons
              </NavItem>

              <NavItem className="navItem2" style={{ fontSize: navFont }}>
                - Funky Simon
              </NavItem>

              <NavItem style={{ fontSize: navFont }} className="navItem2">
                - Is It Hot?
              </NavItem>
            </Nav>
          </Col>

          <div
            ref={scrollRef}
            className="pleaseScroll"
            style={{
              display: "inline-block",
              padding: 0,
              maxHeight: "110vh",
              maxWidth: "85vw",
              overflow: "scroll",
            }}
          >
            <div className="topContainer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: `${scalePercent}%`,
                    textAlign: "center",
                    zIndex: 70,
                  }}
                  className="name"
                >
                  JOSHUA ISRAEL
                </h1>
                <h6 style={{ fontSize: navFont, textAlign: "center" }}>
                  FRONT-END DEVELOPER
                </h6>
              </div>
              <div className="contact">
                <div style={{ display: "flex" }}>
                  <svg
                    width="1em"
                    height="1em"
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
                  <h6 style={{ marginLeft: "5px", fontSize: navFont }}>
                    joshisrael93@gmail.com
                  </h6>
                </div>
                <div className="socialDiv">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/joshri"
                  >
                    <Image className="social" src={liImage} />
                  </a>
                </div>
              </div>
            </div>
            <ScrollContainer />
          </div>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
