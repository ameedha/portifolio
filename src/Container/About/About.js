import React from "react";
import about from "../../assets/img/about.jpg";
import "./About.css";

function About() {
  //About container is divided into two equal parts as image and content//
  return (
    <div className="container">
      <div className="about_container">
        <div className="images">
          <img src={about} alt="" />
        </div>

        <div className="content">
          <h1>About Me</h1>
          <p>
            Self learning is the stepping stone to my technical life.Improving
            technical skills through personal learning by creating hands on
            projects with the help of different sources and trying to make my
            self an expert web developer.
          </p>

          <div className="titles">
            <div className="subtitles">
              <p>
                <span>Skills</span>
                <br />
                Html,CSS,Javascript,React.js
              </p>
            </div>
            <div className="subtitles">
              <p>
                <span>Experience</span>
                <br />
                Completed hands of projects in Javascript and React.js
              </p>
            </div>
            <div className="subtitles">
              <p>
                <span>Education</span>
                <br />
                B-tech in Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
