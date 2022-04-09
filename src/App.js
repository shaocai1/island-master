import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import Contact from "./components/contact/Contact";
import Textfield from "./components/descrip/Textfield";
import Sliideshow from "./components/slideshow/Sliideshow";
import Footer from "./components/footer/Footer";
import ParticlesBackground from "./components/particles/Particles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpeg"})`,
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    backgroundBlendMode: "darken",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <ParticlesBackground />
        <Header />
        <PlaceToVisit />
        <Textfield />
        <Sliideshow />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
