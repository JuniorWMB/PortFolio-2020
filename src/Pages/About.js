import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import "./about.css";
// import react from "../assets/react.png";
// import reactNative from "../assets/reactnative.png";
// import javascript from "../assets/javascript.jpg";
// import htmlandcss from "../assets/htmlandcss.jpg";
// import node from "../assets/node.jpg";

function About() {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(
      [
        ".header__skillsfrontend",
        ".header__skillssoft",
        ".header__skillsbackend",
      ],
      {
        duration: 1,
        height: 0,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 1,
        },
      }
    );
  });

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
              <ul>
                <li>VanillaJS</li>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Material UI</li>
                <li>GreenSock</li>
                <li>Netlify</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="header__skillssoft">
            <h1>Soft Skills</h1>
            <ul>
              <li>Sociability</li>
              <li>Autonomie</li>
              <li>Curiosité</li>
              <li>Logique</li>
            </ul>
          </div>
          <div className="header__skillsbackend">
            <h1>Backend Skills</h1>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Stripe</li>
              <li>Cloudinary</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
