import React, { useRef, useEffect, useState } from "react";
import { ArrowDownCircle } from "react-feather";
import gsap from "gsap";
import axios from "axios";
import ReactGA from "react-ga";

import "./contact.css";
import { useHistory } from "react-router-dom";

function Contact() {
  let arrowRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    gsap.from(arrowRef, {
      duration: 0.7,
      yoyo: "power3.inOut",
      y: 30,
      repeat: -1,
    });
  });

  let time = () => {
    setTimeout(() => {
      history.push("/about");
    }, 3000);
  };

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [sendText, setSendText] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [disable, setDisable] = useState(false);

  //creat my handle
  const clickHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Send a formulaire",
    });
    alert("test ok");
  };

  const handleClick = () => {
    setErrorText(!errorText);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.target.reset();
    e.preventDefault();

    if (name && email && mobile) {
      await axios.post(
        "https://portfolio-fomulaire.herokuapp.com/portfolio-contact",
        {
          email,
          name,
          mobile,
        }
      );
      setSendText(true);
      setDisable(true);
      time();
    } else {
      setErrorText("Alfred something missing !");
    }
  };
  console.log("name", handleSubmit);

  return (
    <div className="contact">
      <div className="contact__workwithme">
        <p>
          If you would like to collaborate with me or contact me, please fill
          out the form below
        </p>
        <div>
          <ArrowDownCircle ref={(el) => (arrowRef = el)} size={50} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="contact__form"
        autoComplete="off"
      >
        <p className="contact__forminputpara">
          Hello, my name is
          <input
            onChange={handleNameChange}
            value={name}
            className="form__input"
            type="text"
            size="40px"
            placeholder="Bruce Wayne "
          />
          and i'd like to work with you. <br /> My email address is
          <input
            onChange={handleEmailChange}
            value={email}
            className="form__inputthree"
            type="email"
            placeholder="Batman@gothamcity.io"
            autoComplete="false"
          />
          and my phone number is
          <input
            onChange={handleMobileChange}
            value={mobile}
            className="form__inputtwo"
            type="tel"
            placeholder="0620201102"
          />
          .
          <br />
        </p>
        {errorText && (
          <div>
            <p className="error">{errorText}</p>
            <button className="btn__nosend" type="submit" onClick={handleClick}>
              <h1> Try again !</h1>
            </button>
          </div>
        )}

        {sendText ? (
          <p style={{ color: "green", fontSize: "1.4rem" }}>
            Message sent thanks <span> 😉 </span>
          </p>
        ) : null}
        {!errorText && (
          <button
            onClick={clickHandler}
            className="btn__send"
            type="submit"
            disabled={disable}
          >
            <h1> Send</h1>
          </button>
        )}
      </form>
    </div>
  );
}

export default Contact;
