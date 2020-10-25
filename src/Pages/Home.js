import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import "./home.css";
import { Timeline } from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";

function Home() {
  const words = ["Junior.", "A React FrontEnd Dev.", "Free now."];
  let cursorRef = useRef(null);
  let tl = gsap.timeline();
  let tlminor = gsap.timeline();
  let masterTl = gsap.timeline();

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
      .from(".hi", { duration: 1, y: "9vh", ease: "power3.out" })
      .to(".box", { duration: 1, height: "5vw", ease: "elastic.out" });

    words.forEach((word) => {
      let tlminor = gsap.timeline();
      tlminor.to(".text", { duration: 1, text: word });
      masterTl.add(tlminor);
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
          {/* <p>Hi,I'm Junior </p> */}
        </div>
        <div className="home__textright">
          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Doloribus nihil eligendi deleniti, ut iusto veniam?
            Dignissimos possimus id est error dicta architecto. Soluta ea quo
            corrupti alias, modi tempore similique.
          </p>
          <div className="home__social">
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
