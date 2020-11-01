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
import gsap from "gsap";
import Test from "../assets/paris.jpeg";

function Cards() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 245,
      display: "flex",
      marginRight: "150px",
    },
    cardSlide: {
      left: 20,
      marginLeft: "5px",
      position: "absolute",
      zIndex: -1,
    },
    contain: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      flexWrap: "wrap",
      border: "3px solid red",
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

  const [stack, setStack] = useState({
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
      console.log("Click 1");
    } else if (stack.clicked === true) {
      setStack({
        clicked: !stack.clicked,
        nameClick: "View the Stack",
      });
      console.log("Click 2");
    } else if (stack.clicked === false) {
      setStack({
        clicked: !stack.clicked,
        nameClick: "Close the Stack",
      });
      console.log("Click 3");
    }
  };
  //useRef
  let slideRef = useRef(null);

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
  });

  return (
    <div style={{ with: "800px" }}>
      <Container className={classes.contain} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <div>
            <Box className={classes.root}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={Test}
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
              <Box className={classes.cardSlide}>
                <Card ref={(el) => (slideRef = el)}>
                  <CardContent>
                    <Typography>
                      <Box> FrontEnd</Box>
                      <Box> React</Box>
                      <Box> HTML & CSS</Box>
                      <Box> Firebase </Box>
                      <br />
                      <Box>BackEnd</Box>
                      <Box> Nodejs </Box>
                      <Box> Mongodb</Box>
                      <Box> Express</Box>
                      <Box> Stripe</Box>
                      <Box> Heroku</Box>
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
            <CardActionArea>
              <CardMedia
                component="img"
                image={Test}
                width="100%"
                height="200"
              />
            </CardActionArea>
            <CardContent>
              <Typography>Covid-19 Tracker</Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={handleClick}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  {stack.nameClick}
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
        </Box>
        {/* second Block */}
        <Box className={classes.root}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Test}
                width="100%"
                height="200"
              />
            </CardActionArea>
            <CardContent>
              <Typography>Marvel Comics</Typography>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={handleClick}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  {stack.nameClick}
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
        </Box>
      </Container>
    </div>
  );
}

export default Cards;
