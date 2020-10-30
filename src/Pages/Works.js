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
import Test from "../assets/london.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    display: "flex",
  },
  cardSlide: {
    maxWidth: 200,
    height: 300,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: "9",
    right: 10,
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
  let stackRef = useRef(null);

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
      // gsap.to(stackRef, { duration: 1, x: 0 });
    } else if (
      view.clicked === true ||
      (view.clicked === true && view.initial === null)
    ) {
      // gsap.to(stackRef, { duration: 1, x: 140 });
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={classes.boxContain}
        style={{ border: "2px solid red", width: "30%" }}
      >
        <Box className={classes.root}>
          <Card variant="elevation">
            <CardActionArea>
              <CardMedia
                component="img"
                title="lbc"
                height="200"
                width="100%"
                image={Test}
              />
              <CardContent>
                <Typography>Leboncoin Réplica</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={handleViewClick}
                  size="small"
                  color="secondary"
                  variant="outlined"
                >
                  {view.nameMenu}
                </Button>
                <Button size="small" color="secondary" variant="contained">
                  View the Code
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Box>
        <Box ref={(el) => (stackRef = el)} className={classes.cardSlide}>
          <Card>
            <CardContent>
              <Typography>
                <Box> FrontEnd</Box>
                <Box> React</Box>
                <Box> HTML & CSS</Box>
                <Box> Call API </Box>
                <br />
                <br />
                <Box>BackEnd</Box>
                <Box> Nodejs </Box>
                <Box> Mongodb</Box>
                <Box> Express</Box>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>

    // <ThemeProvider muiTheme={theme}>
    //   <Box display="flex" flexDirection="row">
    //     <Card theme="t" className={classes.root}>
    //       <CardActionArea>
    //         <CardMedia
    //           component="img"
    //           height="200"
    //           width="100%"
    //           image={Test}
    //           title="test"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h6" component="h2">
    //             LeBoncoin Réplica
    //           </Typography>
    //           <CardActions>
    //             <Button size="small" color="secondary">
    //               See the Stack
    //             </Button>
    //             <Button>See a Code</Button>
    //           </CardActions>
    //         </CardContent>
    //         <CardContent>
    //           <Typography>
    //             FrontEnd - React - HTML & CSS - Call Api BackEnd - Nodejs -
    //             MongodbAtlas - Express
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //     </Card>
    //   </Box>
    //   <Card theme="t" className={classes.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="200"
    //         width="100%"
    //         image={Test}
    //         title="test"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h6" component="h2">
    //           Covid 19 Tracker
    //         </Typography>
    //         <CardActions>
    //           <Button size="small" color="secondary">
    //             See the Stack
    //           </Button>
    //           <Button>See a Code</Button>
    //         </CardActions>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    //   <Card theme="t" className={classes.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="200"
    //         width="100%"
    //         image={Test}
    //         title="test"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h6" component="h2">
    //           Marvel Comics
    //         </Typography>
    //         <CardActions>
    //           <Button size="small" color="secondary">
    //             See the Stack
    //           </Button>
    //           <Button>See a Code</Button>
    //         </CardActions>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    // </ThemeProvider>
  );
}

export default Works;
