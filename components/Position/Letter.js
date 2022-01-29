import classes from "./Letter.module.scss";
import { useEffect, useRef, useState } from "react";

function Letter({ mousePos }) {
  const letterRef = useRef();
  const [mouseEnter, setMouseEnter] = useState(false);
  let letterClasses = mouseEnter
    ? `${classes.letterWrapper} ${classes.fadeIn}`
    : `${classes.letterWrapper} ${classes.fadeOut}`;
  return (
    <div
      className={letterClasses}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseOut={() => setMouseEnter(false)}
      ref={letterRef}
    />
  );
}

export default Letter;
