import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import "./home.css";
import { Timeline } from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

const words = ["Junior.", "A React.js Dev.", "A French Dev.", "Free now."];

function Home() {
  let cursorRef = useRef(null);
  let tl = gsap.timeline();
  // let tlminor = gsap.timeline();

  // words.forEach((word) => {
  //   let tl = gsap.timeline();
  //   tl.to(".text", { duration: 1, text: word });
  //   masterTl.add(tl);
  // });

  useEffect(() => {
    gsap.to(cursorRef, { opacity: 0, ease: "power2.inOut", repeat: -1 });
    tl.to(".box", {
      duration: 1,
      width: "15vw",
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

    // words.forEach((word) => {
    //   let tl = gsap.timeline(TextPlugin);
    //   tl.to(".text", { duration: 1, text: word });
    //   masterTl.add(tl);
    // });
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

    // textPlug.to(".text", { duration: 1, text: "Gerclaud" });
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
          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Doloribus nihil eligendi deleniti, ut iusto veniam?
            Dignissimos possimus id est error dicta architecto. Soluta ea quo
            corrupti alias, modi tempore similique.
          </p>
          <div className="home__social">
            <a href="">
              <div>
                <GitHub strokeWidth="1.5px" size={60} />
              </div>
            </a>
            <Linkedin strokeWidth="1.5px" size={60} />
            <Twitter strokeWidth="1.5px" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
