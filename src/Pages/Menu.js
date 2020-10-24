import React, { useEffect, useRef } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu({ state }) {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="menu__container">
      <div className="menu__secondarybackground"></div>
      <div className="menu__layer">
        <div className="menu__citybackground"></div>
        {/* <div className="menu__header">
          <Header disabled={disabled} handleMenu={handleMenu} state={state} />
        </div> */}
        <div className="menu__containtext">
          <div className="menu__textleft">
            <Link to="/about" className="menu__nav">
              About me
            </Link>
            <Link to="/works" className="menu__nav">
              Works
            </Link>
            <Link to="/contact" className="menu__nav">
              Contact
            </Link>
          </div>
          <div className="menu__right">
            <p>
              Lorem ipsum <b> dolor </b> sit amet consectetur adipisicing elit.
              <b> Voluptatum </b>
              quae ea architecto sint fuga facere quas eligendi ad laudantium
              minima. Saepe et itaque eius nesciunt dignissimos esse
              <b> numquam </b>
              laboriosam ipsam!
            </p>
          </div>
        </div>
        <div className="menu__location">
          <p>I can work here:</p>
          <span>Paris</span>
          <span>Marseille</span>
          <span>London</span>
          <span>Kinshasa</span>
          <span>Lubumbashi</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
