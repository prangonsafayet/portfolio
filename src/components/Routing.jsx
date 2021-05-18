import React from "react";
import { Switch, Route } from "react-router";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
const Routing = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}></Route>
    <Route exact path="/aboutme" component={AboutMe}></Route>
    <Route exact path="/portfolio" component={Portfolio}></Route>
    <Route exact path="/contact" component={Contact}></Route>
  </Switch>
);

export default Routing;
