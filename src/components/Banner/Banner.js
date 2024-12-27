import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage:
      "url(https://media.istockphoto.com/photos/bitcoin-cryptocurrency-futuristic-innovation-digital-picture-id1297074905?b=1&k=20&m=1297074905&s=170667a&w=0&h=pHcAAJHae3yjXVcOwnu0lCAPClwLxy6HUn4OitrBiic=)",
    opacity: 0.8,
    backgroundSize: "cover",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    [theme.breakpoints.down("550")]: {
      height: 300, // Example adjustment
      paddingTop: 15,
    },
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    "& h2": {
      fontSize: "4rem", // Default size for larger screens
      [theme.breakpoints.down("550")]: {
        fontSize: "35px", // Font size for max-width 550px
      },
    },
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "skyblue",
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Virtual Currency Library System
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "skyblue",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Virtual Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
