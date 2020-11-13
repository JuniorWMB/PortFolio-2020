import React, { useEffect, useRef } from "react";
import "./menu.css";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";

import paris from "../assets/parisx.jpeg";
import marseille from "../assets/marseillex.jpg";
import london from "../assets/london.jpg";
import kinshasa from "../assets/kinshasaxxx.jpeg";

const cities = [
  { name: "Paris", image: paris },
  { name: "Marseille", image: marseille },
  { name: "London", image: london },
  { name: "Kinshasa", image: kinshasa },
];

function Menu({ state }) {
  // Vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, { duration: 0, css: { display: "block" } });
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      y: 100,
      duration: 0.8,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.4,
      },
    });
  };

  // Hover on the link
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      skeyY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="menu__container">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu__secondarybackground"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu__layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu__citybackground"
        ></div>
        <div className="menu__containtext">
          <div className="menu__textleft">
            <Link
              onMouseEnter={handleHover}
              onMouseOut={handleHoverExit}
              ref={(el) => (line1 = el)}
              to="/about"
              className="menu__nav"
            >
              About me
            </Link>
            <Link
              onMouseEnter={handleHover}
              onMouseOut={handleHoverExit}
              ref={(el) => (line2 = el)}
              to="/works"
              className="menu__nav"
            >
              My Work
            </Link>
            <Link
              onMouseEnter={handleHover}
              onMouseOut={handleHoverExit}
              ref={(el) => (line3 = el)}
              to="/contact"
              className="menu__nav"
            >
              Contact
            </Link>
          </div>
          <div ref={(el) => (info = el)} className="menu__right">
            <p>
              " Be not afraid of greatness. Some are born great, some achieve
              greatness, and others have greatness thrust upon them. "
            </p>
            <h4>William Shakespeare</h4>
          </div>
        </div>
        <div className="menu__location">
          <p>
            Want to see some magics? Hover over a city to see where I can work
            from :
          </p>
          {cities.map((el) => (
            <span
              key={el.name}
              onMouseEnter={() => handleCity(el.image)}
              onMouseOut={handleCityReturn}
            >
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
