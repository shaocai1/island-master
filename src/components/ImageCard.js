import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PopUp from "./popupcomponent/PopUp";

const useStyles = makeStyles({
  cardwrap: {
    position: "sticky",
  },

  root: {
    width: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  cardcontent: {},
  media: {
    height: 440,
  },

  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked, button, setShow }) {
  const classes = useStyles();

  const [popUp, setPopUp] = useState(false);

  return (
    <div className={classes.cardwrap}>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={place.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardcontent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {place.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {place.description}
            </Typography>
            {button && (
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "90px" }}
                onClick={() => {
                  setPopUp(!popUp);
                }}
              >
                Посмотреть
              </Button>
            )}
            {popUp && <PopUp setPopUp={setPopUp} popUp={popUp} />}
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
}
