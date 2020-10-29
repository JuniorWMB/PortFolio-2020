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
    maxWidth: 445,
    display: "flex",
  },
  cardSlide: {
    maxWidth: 200,
    maxHeight: 300,
    display: "none",
    flexDirection: "column",
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
  const [view, setView] = useState({
    initial: false,
    clicked: null,
    nameMenu: "View the Stack",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    disabledMenu();
    if (view.clicked === false) {
      gsap.to(stackRef, { duration: 1, css: { display: "none" } });
    } else if (
      view.clicked === true ||
      (view.clicked === true && view.initial === null)
    ) {
      //open menu
      gsap.to(stackRef, {
        duration: 0,
        css: { display: "block", marginLeft: "20px" },
      });
    }
  });

  const classes = useStyles();

  const handleMenu = () => {
    if (view.initial === false) {
      setView({
        initial: null,
        clicked: true,
        nameMenu: "Close the Stack",
      });
    } else if (view.clicked === true) {
      setView({
        clicked: !view.clicked,
        nameMenu: "View the Stack",
      });
    } else if (view.clicked === false) {
      setView({
        clicked: !view.clicked,
        nameMenu: "Close the Stack",
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
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
                  onClick={handleMenu}
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
