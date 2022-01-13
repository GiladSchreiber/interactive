import classes from "./Home.module.scss";
import { useState } from "react";

function Home() {
  let [showSecondHeader, setShowSecondHeader] = useState(false);
  let [subheader, setSubheader] = useState("");

  function headerClicked() {
    setShowSecondHeader(true);
    setTimeout(() => {
      setSubheader("e");
    }, 200);
    setTimeout(() => {
      setSubheader("ev");
    }, 400);
    setTimeout(() => {
      setSubheader("eve");
    }, 600);
    setTimeout(() => {
      setSubheader("even");
    }, 800);
    setTimeout(() => {
      setSubheader("event");
    }, 1000);
    setTimeout(() => {
      setSubheader("events");
    }, 1200);
  }
  return (
    <div className={classes.homeWrapper}>
      <div
        className={classes.header}
        onClick={headerClicked}
        style={{ cursor: showSecondHeader ? "auto" : "pointer" }}
      >
        INTERACTIVE
        <div
          className={classes.crossingLine}
          style={{ width: showSecondHeader ? "100%" : 0 }}
        />
      </div>
      <div className={classes.subHeader}>{subheader}</div>
    </div>
  );
}

export default Home;
