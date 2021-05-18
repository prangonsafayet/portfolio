import React from "react";
import "../css/AboutMe.css";
import ContactButton from "./ContactButton";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="container text-center position-relative">
        <div className="text-wrapper">
          <h1>A little bit about myself</h1>
          <p>
            My name is Safayet Bin Azam. I am an aspiring web developer from
            Bangladesh. I did my BSc. in Computer Science and Engineering from
            American International University-Bangladesh. I am currently doing
            my MSc. in Information Technology and Computer Science and
            Hochschule Rhein-Waal in Germany. Before coming over I was the{" "}
            <strong>Team leader/Web Developer</strong> at{" "}
            <strong>
              <a href="https://www.planetnine.com/" className="aboutMeLinks">
                Planet Nine
              </a>
            </strong>
            . I worked on projects with several european clients while working
            there. I was responsible for organizing the team, creating
            beautifully animated IABs and also for working with Google Marketing
            platforms like Google DV360, Google DoubleClick Campaign Manager,
            Google studio etc. I have also worked as a frontend developer for{" "}
            <strong>
              <a href="https://www.unlocklive.com/" className="aboutMeLinks">
                UnlockLiveIT ltd.
              </a>
            </strong>
          </p>
          <p>
            In my personal life I am really passionate about music. I can play
            drums and played at many school functions and at home. One of my
            most precious responsibilities was to manage a local rock band from
            Bangladesh named <strong>Conclusion</strong>. I love going to the
            concerts and discovering new music. One of the other thing I really
            like is to discover new technologies. I also spend a lot of time
            playing video games, watching series. I am open-minded, friendly and
            always excited to meet new people. Coming to Europe has been a great
            experience for me and I would like to travel through most of the
            countries here.
          </p>

          <p>
            If you liked my profile please don't hesitate to contact me. I am
            always up for a chat!
          </p>
          <ContactButton></ContactButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
