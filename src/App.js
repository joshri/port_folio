import React from "react";
import { useSelector } from "react-redux";
import Title from "./Title.js";
import Confirm from "./Confirm.js";
import Home from "./Home.js";

function App() {
  const display = useSelector((state) => state.display.display);
  switch (display) {
    case "party":
      return <Title />;
    case "home":
      return <Home />;
    default:
      return <Confirm />;
  }
}

export default App;
