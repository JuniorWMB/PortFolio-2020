import React, { useRef, useEffect } from "react";
import { ArrowDownCircle, Check, ArrowRightCircle } from "react-feather";
import gsap from "gsap";

import "./contact.css";

function Contact() {
  let arrowRef = useRef(null);
  let arrowSendRef = useRef(null);
  useEffect(() => {
    gsap.from(arrowRef, {
      duration: 0.7,
      yoyo: "power3.inOut",
      y: 30,
      repeat: -1,
    });
  });

  // const handleSend = () => {
  //   gsap.from(arrowSendRef, { duration: 1, ease: "powe3.inOut", width: 0 });
  // };
  return (
    <div className="contact">
      <div className="contact__workwithme">
        <p>You want ton work with me, send me a message bellow</p>
        <div>
          <ArrowDownCircle ref={(el) => (arrowRef = el)} size={100} />
        </div>
      </div>
      <form className="contact__form">
        <p className="contact__forminputpara">
          Hello, my name is{" "}
          <input
            className="form__input"
            type="text"
            size="40px"
            placeholder=""
          />
          , i want to hire you for work with me. Check my email is
          <input className="form__input" type="email" /> call me on this number
          <input className="form__input" type="number" />
          if you need a job.
          <br />
        </p>
        <button>
          <p>Click for send</p>
          <ArrowRightCircle
            ref={(el) => (arrowSendRef = el)}
            style={{ cursor: "pointer" }}
            strokeWidth="1.4px"
            size={80}
          />
        </button>
      </form>
    </div>
  );
}

export default Contact;
