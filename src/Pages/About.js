import React from "react";
import Header from "../Components/Header";
import "./about.css";
import react from "../assets/react.png";
import reactNative from "../assets/reactnative.png";
import javascript from "../assets/javascript.jpg";
import htmlandcss from "../assets/htmlandcss.jpg";
import node from "../assets/node.jpg";

function About() {
  return (
    <div className="header__container">
      {/* <Header /> */}
      <div className="header__wrapper">
        <div className="header__talktome">
          <p>
            im Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Incidunt quaerat sunt officia eveniet dolores natus sit reiciendis,
            nisi dolorum! Accusamus maxime nisi delectus voluptate unde labore
            praesentium fuga vel itaque. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illum qui ea ab iusto numquam aut quia laborum
            deserunt sapiente architecto hic, minima facilis, vitae incidunt
            quam eligendi aliquid! Culpa, labo.
          </p>
        </div>
        <div className="header__skills">
          <div className="header__skillsfrontend">
            <div>
              <h1>Frontend Skills</h1>
            </div>
          </div>
          <div className="header__skillsbackend">
            <h1>Backend Skills</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
