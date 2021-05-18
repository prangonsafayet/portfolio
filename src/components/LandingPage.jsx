import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
const LandingPage = () => {
  return (
    <div>
      <div className="row">
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 700,
                },
              },
              color: {
                value: "#133296",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#133296",
                },
              },
            },
          }}
        ></Particles>
      </div>

      <Header></Header>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
};

export default LandingPage;
