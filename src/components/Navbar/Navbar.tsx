import React from "react";
import classes from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={classes.parent}>
      <div>
        <h1 className={classes.app}>App<span>Web</span></h1>
      </div>
      <div className={classes.middle_part}>
        <div>About</div>
        <div>Rentails</div>
        <div>Book</div>
        <div>Contact</div>
        <div>Service</div>
      </div>
      <div className={classes.last_part}>Get In Touch</div>
    </div>
  );
}

export default Navbar;
