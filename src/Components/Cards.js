import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  makeStyles,
  Container,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import "./card.css";
import gsap from "gsap";
import Lbc from "../assets/lbc.jpg";
import Covid from "../assets/covid.jpg";
import Marvel from "../assets/marvel3.jpg";

function Cards() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 245,
      display: "flex",
      marginRight: "150px",
    },
    cardSlide: {
      left: 24,
      marginLeft: "2px",
      position: "absolute",
      zIndex: -1,
    },
    cardSlide2: {
      left: 420,
      marginLeft: "2px",
      position: "absolute",
      zIndex: -1,
    },
    cardSlide3: {
      left: 810,
      marginLeft: "5px",
      position: "absolute",
      zIndex: -1,
    },
    contain: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "1280px",
    },
  });
  const classes = useStyles();

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

  // state
  const [stack, setStack] = useState({
    initial: false,
    clicked: null,
    nameClick: "View the Stack",
  });
  const [stack2, setStack2] = useState({
    initial: false,
    clicked: null,
    nameClick: "View the Stack",
  });
  const [stack3, setStack3] = useState({
    initial: false,
    clicked: null,
    nameClick: "View the Stack",
  });

  //handle
  const handleClick = () => {
    if (stack.initial === false) {
      setStack({
        initial: null,
        clicked: true,
        nameClick: "Close the Stack",
      });
    } else if (stack.clicked === true) {
      setStack({
        clicked: !stack.clicked,
        nameClick: "View the Stack",
      });
    } else if (stack.clicked === false) {
      setStack({
        clicked: !stack.clicked,
        nameClick: "Close the Stack",
      });
    }
  };
  const handleClick2 = () => {
    if (stack2.initial === false) {
      setStack2({
        initial: null,
        clicked: true,
        nameClick: "Close the Stack",
      });
    } else if (stack2.clicked === true) {
      setStack2({
        clicked: !stack2.clicked,
        nameClick: "View the Stack",
      });
    } else if (stack2.clicked === false) {
      setStack2({
        clicked: !stack2.clicked,
        nameClick: "Close the Stack",
      });
    }
  };

  const handleClick3 = () => {
    if (stack3.initial === false) {
      setStack3({
        initial: null,
        clicked: true,
        nameClick: "Close the Stack",
      });
    } else if (stack3.clicked === true) {
      setStack3({
        clicked: !stack3.clicked,
        nameClick: "View the Stack",
      });
    } else if (stack3.clicked === false) {
      setStack3({
        clicked: !stack3.clicked,
        nameClick: "Close the Stack",
      });
    }
  };

  //useRef
  let slideRef = useRef(null);
  let slideRef2 = useRef(null);
  let slideRef3 = useRef(null);

  //use my useEffect below

  useEffect(() => {
    if (stack.clicked === false) {
      gsap.to(slideRef, { duration: 1, x: 0, backgroundColor: "blue" });
    } else if (
      stack.clicked === true ||
      (stack.clicked === true && stack.initial === null)
    ) {
      gsap.to(slideRef, { duration: 1, x: 250, backgroundColor: "orange" });
    }

    if (stack2.clicked === false) {
      gsap.to(slideRef2, { duration: 1, x: 0, backgroundColor: "blue" });
    } else if (
      stack2.clicked === true ||
      (stack2.clicked === true && stack2.initial === null)
    ) {
      gsap.to(slideRef2, { duration: 1, x: 250, backgroundColor: "orange" });
    }

    if (stack3.clicked === false) {
      gsap.to(slideRef3, { duration: 1, x: 0, backgroundColor: "blue" });
    } else if (
      stack3.clicked === true ||
      (stack3.clicked === true && stack3.initial === null)
    ) {
      gsap.to(slideRef3, { duration: 1, x: 250, backgroundColor: "orange" });
    }

    // if (stack2.clicked === false) {
    //   gsap.to(slideRef, { duration: 1, x: 0, backgroundColor: "blue" });
    // } else if (
    //   stack2.clicked === true ||
    //   (stack2.clicked === true && stack2.initial === null)
    // ) {
    //   gsap.to(slideRef, { duration: 1, x: 250, backgroundColor: "orange" });
    // }
  });

  return (
    <div style={{ with: "800px", marginLeft: "135px" }}>
      <div className="card__background"></div>
      <div style={{ marginBottom: "100px", marginLeft: "24px" }}>
        <h1 className="card__title">My Works</h1>
      </div>

      <Container className={classes.contain} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <div>
            <Box className={classes.root}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={Lbc}
                    width="100%"
                    height="200"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography>LeBoncoin Réplica</Typography>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      onClick={handleClick}
                      size="small"
                      color="secondary"
                      variant="contained"
                    >
                      {stack.nameClick}
                    </Button>
                    <a
                      href="https://github.com/JuniorWMB/LBC-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        style={{ marginLeft: "15px" }}
                        size="small"
                        color="secondary"
                        variant="outlined"
                      >
                        View the Code
                      </Button>
                    </a>
                  </Box>
                </CardContent>
              </Card>
              <Box className={classes.cardSlide}>
                <Card ref={(el) => (slideRef = el)}>
                  <CardContent>
                    <Typography>
                      <Box className="title"> FEATURES</Box>
                      <Box> Login/SignUp</Box>
                      <Box> Offers/Offer</Box>
                      <Box> Upload </Box>
                      <Box> Payment </Box>
                      <Box className="title">STACK</Box>
                      <Box> React</Box>
                      <Box> Nodejs </Box>
                      <Box> Stripe</Box>
                      <Box> Heroku</Box>
                      <Box> </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            {/* second */}
          </div>
        </ThemeProvider>
        <Box className={classes.root}>
          <Card>
            <a
              href="https://covid-19-tracker-4b79f.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Covid}
                  width="100%"
                  height="200"
                />
              </CardActionArea>
            </a>
            <CardContent>
              <Typography>Covid-19 Tracker</Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={handleClick2}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  {stack2.nameClick}
                </Button>
                <a
                  href="https://github.com/JuniorWMB/Covid-19Tracker-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ marginLeft: "15px" }}
                    size="small"
                    color="secondary"
                    variant="outlined"
                  >
                    View the Code
                  </Button>
                </a>
              </Box>
            </CardContent>
          </Card>
          <Box className={classes.cardSlide2}>
            <Card ref={(el) => (slideRef2 = el)}>
              <CardContent>
                <Typography>
                  <Box className="title"> FEATURES</Box>
                  <Box> Search Covid</Box>
                  <Box> By Countries</Box>
                  <Box>View a stat</Box>
                  <br />
                  <Box className="title">STACK</Box>
                  <Box> React </Box>
                  <Box> Material UI</Box>
                  <Box> Chart.js</Box>
                  <Box> Leaflet</Box>
                  <Box> Firebase</Box>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        {/* second Block */}
        <Box className={classes.root}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Marvel}
                width="100%"
                height="200"
              />
            </CardActionArea>
            <CardContent>
              <Typography>Marvel Comics</Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={handleClick3}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  {stack3.nameClick}
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  size="small"
                  color="secondary"
                  variant="outlined"
                >
                  View the Code
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Box className={classes.cardSlide3}>
            <Card ref={(el) => (slideRef3 = el)}>
              <CardContent>
                <Typography>
                  <Box className="title"> FEATURES</Box>
                  <Box> Login/SignUp</Box>
                  <Box> Books and Comics</Box>
                  <Box> Favoris </Box>
                  <br />
                  <Box className="title">STACK</Box>
                  <Box> Reactjs </Box>
                  <Box> Nodejs</Box>
                  <Box> Express</Box>
                  <Box> Js-Cookie</Box>
                  <Box> Heroku</Box>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Cards;
