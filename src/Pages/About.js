import gsap from "gsap";
import React, { useEffect } from "react";
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
            <div className="about__title">
              <h1>Frontend Skills</h1>
            </div>
            <div className="about__skills">
              <div>
                <h6>VanillaJS</h6>
                <h6>ReactJS</h6>
                <h6>React Native</h6>
                <h6>HTML & CSS</h6>
              </div>
              <div>
                <h6>Material UI</h6>
                <h6>GreenSock</h6>
                <h6>Netlify</h6>
                <h6>Firebase</h6>
              </div>
            </div>
          </div>
          <div className="header__skillssoft">
            <div className="about__title">
              <h1>Soft Skills</h1>
            </div>
            <div className="about__skills">
              <div>
                <h6>Sociability</h6>
                <h6>Autonomie</h6>
                <h6> Curiosité</h6>
                <h6>Logique</h6>
              </div>
            </div>
          </div>
          <div className="header__skillsbackend">
            <div className="about__title">
              <h1>Backend Skills</h1>
            </div>
            <div className="about__skills">
              <div>
                <h6>NodeJS</h6>
                <h6>Express</h6>
                <h6>MongoDB</h6>
                <h6>Git</h6>
              </div>
              <div>
                <h6>Github</h6>
                <h6>Heroku</h6>
                <h6>Stripe</h6>
                <h6>Cloudinary</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
