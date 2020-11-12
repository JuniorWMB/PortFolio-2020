import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import { GitHub, Linkedin } from "react-feather";
import "./home.css";
import { TextPlugin } from "gsap/TextPlugin";
import ReactGa from "react-ga";
import { withRouter } from "react-router-dom";

const words = ["Junior.", "A React.js Dev.", "A French Dev.", "Available Now."];

function Home() {
  let cursorRef = useRef(null);
  let tl = gsap.timeline();
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_ID);
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    gsap.to(cursorRef, { opacity: 0, ease: "power2.inOut", repeat: -1 });
    tl.to(".box", {
      duration: 1,
      width: "13vw",
      delay: 0.5,
      ease: "power4.inOut",
    })
      .from(".hi", {
        duration: 1,
        y: "9vh",
        ease: "power3.out",
        onComplete: () => masterTl.play(),
      })
      .to(".box", { duration: 1, height: "5vw", ease: "elastic.out" })
      .to(".box", {
        duration: 1,
        autoAlpha: 0.2,
        yoyo: true,
        repeat: -1,
        ease:
          "rough({template:none.out, strength:1,points:20,taper:'none',randomize:true,clamp:false})",
      });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    words.forEach((word) => {
      let tl2 = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      gsap.registerPlugin(TextPlugin);
      tl2.to(".text", {
        text: word,
        duration: 1,
      });
      masterTl.add(tl2);
    });
  });

  return (
    <div className="home__container">
      <div className="home">
        <div className="home__textleft">
          <span className="box"></span>
          <span className="hi">Hi, I'm</span>
          <span className="text"></span>
          <span ref={(el) => (cursorRef = el)} className="cursor">
            _
          </span>
        </div>
        <div className="home__textright">
          <div className="home__social">
            {/* <div className="home__barcolortwo"></div>
            <div className="home__barcolorthree"></div> */}
          </div>
        </div>
      </div>
      <div className="home__media">
        <div className="home__mediasocial">
          <a
            href="https://github.com/JuniorWMB"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub color="black" strokeWidth="1.5px" size={60} />
          </a>
        </div>
        <div className="home__mediasocial">
          <a
            href="https://www.linkedin.com/feed/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin color="black" strokeWidth="1.5px" size={60} />
          </a>
        </div>
        {/* <div className="home__mediasocial">
          <a href="">
            <Twitter color="black" strokeWidth="1.5px" size={60} />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
