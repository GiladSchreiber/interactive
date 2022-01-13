import classes from "./End.module.scss";
import Brick from "./Brick";
import { useState } from "react";

function End() {
  let [mousePos, setMousePos] = useState([100, 50]);
  let bricks = [];
  for (let i = 0; i < 1400; i++) {
    bricks.push(
      <Brick width={i % 3 == 0 ? "20px" : "40px"} mousePos={mousePos} />
    );
  }
  return (
    <div
      className={classes.endWrapper}
      onMouseMove={(e) => setMousePos([e.clientX, e.clientY])}
    >
      <div className={classes.message}>BREAK THE WALL</div>
      {bricks}
    </div>
  );
}

export default End;
