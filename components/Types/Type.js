import classes from "./Type.module.scss";
import { useState } from "react";

function Type({ top, left, header, clicked, items }) {
  var words = items.map((element) => {
    return (
      <div
        className={classes.word}
        style={{
          transform: clicked
            ? "translate(0, 0)"
            : "translate(" +
              (Math.random() * 100 - 50) +
              "px, " +
              (Math.random() * 300 - 70) +
              "px) scale(" +
              (1 + Math.random()) +
              ") rotate(" +
              (Math.random() * 20 - 10) +
              "deg)",
        }}
      >
        {element}
      </div>
    );
  });
  return (
    <div
      className={classes.typeBox}
      style={{
        outlineWidth: clicked ? "3px" : 0,
        top: top,
        left: left,
        height: clicked ? "35vh" : 0,
      }}
    >
      <div className={classes.header} style={{ opacity: clicked ? 1 : 0 }}>
        {header}
      </div>
      <div className={classes.wordsWrapeer}>{words}</div>
    </div>
  );
}

export default Type;
