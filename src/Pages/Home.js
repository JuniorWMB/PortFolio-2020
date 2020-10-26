import gsap from "gsap/gsap-core";
import React, { useRef, useEffect, useState } from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import "./home.css";
import { Timeline } from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

const words = ["Junior.", "A React.js Dev.", "A French Dev.", "Free now."];

function Home() {
  let cursorRef = useRef(null);
  let tl = gsap.timeline();

  useEffect(() => {
    gsap.to(cursorRef, { opacity: 0, ease: "power2.inOut", repeat: -1 });
    tl.to(".box", {
      duration: 1,
      width: "14.5vw",
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

  // useEffect(() => {
  //   let test = setInterval(
  //     () =>
  //       setCitation({
  //         message: text[index].message,
  //         author: text[index].author,
  //       }),
  //     2000
  //   );
  //   return () => {
  //     clearInterval(test);
  //   };
  // }, [text]);

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
          {/* <p>
            text: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloribus nihil eligendi deleniti, ut iusto veniam? Dignissimos
            possimus id est error dicta architecto. Soluta ea quo corrupti
            alias, modi tempore similique.
          </p> */}
          {/* <button onClick={handleCitaClick}>click me</button> */}
          <div className="home__social">
            {/* <ul>
              <li>
                <a href="https://github.com/wrongakram/react-hamburger-menu/blob/master/src/App.scss">
                  jjjjjjjjunrvkzhvnozevzuibv
                </a>
              </li>
            </ul> */}
            <GitHub strokeWidth="1.5px" size={60} />
            <Linkedin strokeWidth="1.5px" size={60} />
            <Twitter strokeWidth="1.5px" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
