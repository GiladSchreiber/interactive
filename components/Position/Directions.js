import classes from "./Directions.module.scss";
import { useState } from "react";
import Direction from "./Direction";

function Directions() {
  let [mousePos, setMousePos] = useState([]);

  var directions = [];
  for (var i = 0; i < 80; i++) {
    directions.push(
      <Direction angle={Math.random() * 360} mousePos={mousePos} />
    );
  }
  return (
    <div
      className={classes.upperLeft}
      onMouseMove={(e) => setMousePos([e.clientX, e.clientY])}
    >
      {directions}
    </div>
  );
}

export default Directions;
