import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="main-info text-center">
          <h1>Web Development And Digital Marketing</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Design",
              "Web Development",
              "Banner Development",
              "Google Ads",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
          <a href="#" className="btn-main-offer">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
