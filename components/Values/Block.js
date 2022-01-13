import classes from "./Block.module.scss";
import { useEffect, useState } from "react";

function Block({ scroll }) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setLeft(-Math.floor(Math.random() * 5000));
    setTop(Math.floor(Math.random() * 300));
    setSpeed(Math.random());
    setWidth(50 + Math.floor(Math.random() * 100));
    setHeight(20 + Math.floor(Math.random() * 100));
    setOpacity(Math.random());
  }, []);
  return (
    <div
      className={classes.block}
      style={{
        top: top + "px",
        left: left + scroll * speed + "px",
        width: width + "px",
        height: height + "px",
        opacity: opacity,
      }}
    />
  );
}

export default Block;
