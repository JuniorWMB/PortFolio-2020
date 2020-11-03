import React, { useRef, useEffect, useState } from "react";
import { ArrowDownCircle, Check, ArrowRightCircle } from "react-feather";
import gsap from "gsap";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
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

  // const handleSend = () => {
  //   gsap.from(arrowSendRef, { duration: 1, ease: "powe3.inOut", width: 0 });

  // };

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
      <form className="contact__form">
        <p className="contact__forminputpara">
          Hello, my name is
          <input
            className="form__input"
            type="text"
            size="40px"
            placeholder="Bruce Wayne "
          />
          and i'd like to work with you. <br /> My email address is
          <input
            className="form__inputthree"
            type="email"
            placeholder="Batman@gothamcity.io"
          />{" "}
          and my phone number is
          <input
            className="form__inputtwo"
            type="number"
            placeholder="0620201102"
          />
          .
          <br />
        </p>

        <ThemeProvider theme={theme}>
          <Button
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
        </ThemeProvider>
      </form>
    </div>
  );
}

export default Contact;
