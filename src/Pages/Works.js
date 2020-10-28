import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Test from "../assets/london.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
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
  const classes = useStyles();

  return (
    <ThemeProvider muiTheme={theme}>
      <Card theme="t" className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={Test}
            title="test"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              LeBoncoin Réplica
            </Typography>
            <CardActions>
              <Button size="small" color="secondary">
                See the Stack
              </Button>
              <Button>See a Code</Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card theme="t" className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={Test}
            title="test"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              LeBoncoin Réplica
            </Typography>
            <CardActions>
              <Button size="small" color="secondary">
                See the Stack
              </Button>
              <Button>See a Code</Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card theme="t" className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={Test}
            title="test"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              LeBoncoin Réplica
            </Typography>
            <CardActions>
              <Button size="small" color="secondary">
                See the Stack
              </Button>
              <Button>See a Code</Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}

export default Works;
