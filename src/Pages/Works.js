import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  Box,
} from "@material-ui/core";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Cards from "../Components/Cards";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    display: "flex",
  },
  main: {
    maxWidth: 1000,
    maxHeight: 1000,
    border: "2px solid red",
  },
  boxStyle: {
    maxWidth: 400,
    maxHeight: 320,
    position: "relative",
    border: "2px solid blue",
    zIndex: "9",
    display: "flex",
  },
  cardSlide: {
    position: "absolute",
    zIndex: "-1",

    // maxWidth: 200,
    // height: 320,
    // display: "flex",
    // flexDirection: "column",
    // position: "absolute",
    // zIndex: "9",
    // opacity: 0,
    // right: 0,
    // left: 0,
    // top: 0,
    // border: "2px solid blue",
  },
  boxContain: {
    position: "relative",
    border: "1px solid green",
  },
});

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

function Works() {
  // let stackRef = useRef(null);
  let stackSlide = useRef(null);

  //do me state here
  const [view, setView] = useState({
    initial: false,
    clicked: null,
    nameMenu: "View the Stack",
  });
  // do my handle here
  const handleViewClick = () => {
    if (view.initial === false) {
      setView({
        initial: null,
        clicked: true,
        nameMenu: "Close the Stack",
      });
      console.log("1");
    } else if (view.clicked === true) {
      setView({
        clicked: !view.clicked,
        nameMenu: "View the Stack",
      });
      console.log("2");
    } else if (view.clicked === false) {
      setView({
        clicked: !view.clicked,
        nameMenu: "Close the Stack",
      });
      console.log("3");
    }
  };

  //do me UseEffect and gsap here

  useEffect(() => {
    if (view.clicked === false) {
      gsap.to(stackSlide, {
        duration: 2.5,
        css: { display: "block", backgroundColor: "red" },
      });
    } else if (
      view.clicked === true ||
      (view.clicked === true && view.initial === null)
    ) {
      gsap.to(stackSlide, {
        duration: 2.5,
        ease: "power2.out",
        css: { display: "flex", backgroundColor: "blue" },
      });
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
}

export default Works;
