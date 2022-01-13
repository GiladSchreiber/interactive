import classes from "./Gradient.module.scss";
import { useState } from "react";

function Gradient() {
  const [offset, setOffset] = useState(0);

  function wheel(e) {
    setOffset(offset - Math.abs(e.deltaY));
  }
  let portion = -((offset / 10) % 200);
  return (
    <div
      className={classes.bottomRight}
      onWheel={(e) => wheel(e)}
      style={{
        background:
          "linear-gradient(to left, #293f54 0%, #8d3264 " +
          (portion < 100 ? portion : 100 - (portion - 100)) +
          "%, #293f54 100%",
      }}
    ></div>
  );
}

export default Gradient;
