import React from "react";
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
} from "@material-ui/core";
import Test from "../assets/paris.jpeg";

function Cards() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 245,
      display: "flex",
    },
    cardSlide: {
      left: 10,
      zIndex: -1,
      border: "1px solid red",
      position: "absolute",
    },
    contain: {
      display: "flex",
      position: "relative",
    },
  });
  const classes = useStyles();

  return (
    <div style={{ border: "1px solid green", with: "800px" }}>
      <Container className={classes.contain} maxWidth="lg">
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
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.cardSlide}>
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
      </Container>
    </div>
  );

  //  <Box className={classes.boxStyle}>
  //       <Card variant="elevation">
  //         <CardActionArea>
  //           <CardMedia
  //             component="img"
  //             image={Test}
  //             width="100%"
  //             height="200"
  //           />
  //         </CardActionArea>
}

export default Cards;
