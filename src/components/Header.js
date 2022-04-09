import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    //jstifyContent: "center",
    //alignItems: "center",
    width: "100vw",
    fontFamily: "Nunito",
    zIndex: 100,
    //
  },
  appbar: {
    background: "none",
    width: "100vw",
  },
  appbarWrapper: {
    width: "80vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  appbarTitle: {
    //flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#fff",
  },
  container: {
    textAlign: "center",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
  titleWrapper: {
    width: "60vw",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  //Вам нужен диэтаноламид жирных кислот?
  return (
    <div className={classes.root} id="header">
      <div className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Office<span className={classes.colorText}>Craft</span>
          </h1>
          <h1 className={classes.title}>
            Вам нужен <br />
            <span className={classes.colorText}>
              диэтаноламид жирных кислот?
            </span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>

          {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}
        </Toolbar>
      </div>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <div className={classes.titleWrapper}></div>
        </div>
      </Collapse>
    </div>
  );
}
