import React, { useRef, useEffect, useState } from "react";
import { ArrowDownCircle, Check, ArrowRightCircle } from "react-feather";
import gsap from "gsap";
import axios from "axios";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import "./contact.css";

function Contact() {
  let arrowRef = useRef(null);
  useEffect(() => {
    gsap.from(arrowRef, {
      duration: 0.7,
      yoyo: "power3.inOut",
      y: 30,
      repeat: -1,
    });
  });

  const useStyles = makeStyles((theme) => ({
    button: {},
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#fed330",
      },
    },
  });

  const classes = useStyles();

  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errorText, setErrorText] = useState("");

  //creat my handle
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
    // e.target.reset();
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
          <p className="error">
            {errorText}
            <button
              style={{
                width: "300px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "red",
                border: "none",
                outline: "none",
                cursor: "pointer",
                color: "white",
              }}
              type="submit"
              onClick={handleClick}
            >
              <h1> Try again !</h1>
            </button>
          </p>
        )}

        {/* 
        <ThemeProvider theme={theme}>
          <Button
          type=""
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
              backGround: "red",
              position: "absolute",
              left: "1160px",
            }}
          >
            Send
          </Button>
        </ThemeProvider> */}
        {!errorText && (
          <button
            style={{
              width: "300px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "#fed330",
              border: "none",
              outline: "none",
              cursor: "pointer",
              color: "white",
            }}
            type="submit"
          >
            <h1> Send</h1>
          </button>
        )}
      </form>
    </div>
  );
}

export default Contact;
