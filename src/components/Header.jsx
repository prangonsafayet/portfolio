import React from "react";
import "../css/Header.css";
import Typed from "react-typed";
import ContactButton from "./ContactButton";
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
          <ContactButton></ContactButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
