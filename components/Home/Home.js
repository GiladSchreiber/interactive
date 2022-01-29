import classes from "./Home.module.scss";
import { useState } from "react";

function Home() {
  let [showSecondHeader, setShowSecondHeader] = useState(false);
  let [subheader, setSubheader] = useState("");

  function headerClicked() {
    setShowSecondHeader(true);
    setTimeout(() => {
      setSubheader("e");
    }, 100);
    setTimeout(() => {
      setSubheader("ev");
    }, 200);
    setTimeout(() => {
      setSubheader("eve");
    }, 300);
    setTimeout(() => {
      setSubheader("even");
    }, 400);
    setTimeout(() => {
      setSubheader("event");
    }, 500);
    setTimeout(() => {
      setSubheader("events");
    }, 600);
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
      <div
        className={classes.barcode}
        style={{
          backgroundImage: "url('/interactive/assets/frame.png')",
          opacity: showSecondHeader ? 1 : 0,
        }}
      />
    </div>
  );
}

export default Home;
