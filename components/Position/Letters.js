import classes from "./Letters.module.scss";
import { useState } from "react";
import Letter from "./Letter";
function Letters() {
  let [mousePos, setMousePos] = useState([100, 50]);
  let bricks = [];
  for (let i = 0; i < 325; i++) {
    bricks.push(
      <Letter width={i % 3 == 0 ? "20px" : "40px"} mousePos={mousePos} />
    );
  }
  return (
    <div
      className={classes.topRight}
      onMouseMove={(e) => setMousePos([e.clientX, e.clientY])}
    >
      {bricks}
    </div>
  );
}

export default Letters;
