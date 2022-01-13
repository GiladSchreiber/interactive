import classes from "./Glow.module.scss";
import { useState } from "react";
function Glow() {
  let [mousePos, setMousePos] = useState([100, 50]);
  return (
    <div
      className={classes.topLeft}
      onMouseMove={(e) => setMousePos([e.clientX, e.clientY])}
      style={{
        backgroundImage:
          "radial-gradient(farthest-corner at " +
          mousePos[0] +
          "px " +
          mousePos[1] +
          "px,#8d3264 0%,  #293f54 100%)",
      }}
    />
  );
}

export default Glow;
