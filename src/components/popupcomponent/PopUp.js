import React from "react";
import "./popup.css";
import Button from "@material-ui/core/Button";
const PopUp = ({ setPopUp, popUp }) => {
  return (
    <div className="tootootoo">
      <div className="box">
        <div className="box1"></div>
        <div className="box2"></div>

        {/* <div
          className="image1"
          style={{ background: `url("fake1.jpg")` }}
        ></div>
        <div className="image2"></div> */}

        {/* <div className="imgcontainer">
        <div className="img"></div>
      </div> */}
      </div>
      <Button
        className="closeicon"
        variant="contained"
        color="white"
        onClick={() => setPopUp(!popUp)}
      >
        Close
      </Button>
    </div>
  );
};

export default PopUp;
