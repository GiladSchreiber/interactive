import classes from "./Letter.module.scss";
import { useEffect, useRef, useState } from "react";

function Letter({ width, mousePos }) {
  const letterRef = useRef();
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    let rect = letterRef.current.getBoundingClientRect();
    let dist = Math.sqrt(
      Math.pow(rect.x - mousePos[0], 2) + Math.pow(rect.y - mousePos[1], 2)
    );
    let currentOpacity = Math.min(dist / 200.0, 1);
    setOpacity(currentOpacity < 0.3 ? 0 : currentOpacity);
  }, [mousePos]);

  return (
    <div
      className={classes.letterWrapper}
      ref={letterRef}
      style={{ width: width, opacity: opacity }}
    />
  );
}

export default Letter;
