import gsap from "gsap";
import React, { useEffect } from "react";
import "./about.css";
import Moi from "../assets/me2.jpeg";
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
            Après different experiences, j'ai decidé de revenir à mon amour de
            jeunesse ! Le dévelopement web.
            <br />
            <b className="about__bold ">Sociable, dynamique, curieu </b>et
            toujours partant pour du pair programming, j'ai su apprendre
            intélligement seul et en equipe de nombreuse connaissance en{" "}
            <b className="about__bold ">Javascript </b> (je ne suis qu'au debut
            de la route mais rome ne s'est pas fait en 1jour).{" "}
            <b className="about__bold ">Passionné </b> de manga, serie et de
            lecture divers (oui de la documentation aussi evidement). Adapte de
            la <b>veuille</b> compulsif sur <b>Medium, Youtube, Twitter </b> (
            oui je stalk <b> Dan Abramov</b> chut !!!).
          </p>
          <img className="home__picture" src={Moi} alt="photocv" />
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
                <h6>Sociable</h6>
                <h6>Esprit d'initiative</h6>
                <h6> Curiosité</h6>
                <h6>Logique</h6>
              </div>
              <div>
                <h6>Créatif</h6>
                <h6>Rigoureux</h6>
                <h6> Autonome</h6>
                <h6>Esprit d'équipe</h6>
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
