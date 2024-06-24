import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Nana Kwame Debrah Fosu</div>
            <div className="brief_description">
            I am Nana Kwame Debrah Fosu, a Computer Science student at the University of Wisconsin-Madison and an Apple Pathways Scholar. I have a strong foundation in Java, Python, and JavaScript and am passionate about applying my skills in real-world projects. As the Co-President of the ColorStack chapter at UW-Madison, I am dedicated to promoting diversity in tech. Currently seeking a Summer Software Engineering Internship to further develop my technical expertise and contribute to innovative projects.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
