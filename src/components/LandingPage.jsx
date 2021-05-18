import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Header from "./Header";
const LandingPage = () => {
  return (
    <div>
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

      <Header></Header>
    </div>
  );
};

export default LandingPage;
