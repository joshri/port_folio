import React from "react";
import { Switch, Route } from "react-router-dom";
import Title from "./Title.js";
import Confirm from "./Confirm.js";
import Home from "./Home.js";
import "./styles/main.scss";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Confirm />
      </Route>
      <Route path="/party">
        <Title />
      </Route>
    </Switch>
  );
}

export default App;
