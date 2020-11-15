import gsap from "gsap";
import React, { useEffect } from "react";
import "./about.css";
import Moi from "../assets/me2.jpeg";

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
            Après differentes expériences, j'ai decidé de revenir à mon amour de
            jeunesse: le dévelopement web.
            <b className="about__bold "> Sociable, dynamique, curieux </b>et
            toujours partant pour du pair programming, j'ai pu acquérir ces
            derniers mois de nombreuses connaissances de manière autonome mais
            aussi en équipe. <b className="about__bold "> </b>
            <br />
            Je ne suis qu'au début de mon chemin mais comme on dit "Rome ne
            s'est pas construite en 1 jour".{" "}
            <b className="about__bold ">Passionné </b> de manga, de series et de
            lecture, je suis un grand adepte de la
            <b className="about__bold "> veille technologique</b>: Medium,
            Youtube et Twitter sont mes terrains d'explorations favoris (Et oui,
            je stalk <b className="about__bold "> Dan Abramov</b>{" "}
            <span>🤫</span> ).
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
                <h6>Typescript</h6>
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
          <div className="header__skillssoft skillsofttwo">
            <div className="about__title">
              <h1>Soft Skills</h1>
            </div>
            <div className="about__skills skillstwo">
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
