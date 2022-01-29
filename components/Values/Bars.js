import classes from "./Bars.module.scss";
import { useState } from "react";
import Bar from "./Bar";

function Bars() {
  const [offset, setOffset] = useState(0);

  function wheel(e) {
    setOffset(Math.max(offset + e.deltaY, 0));
  }

  var bars = [];
  for (var i = 0; i < 100; i++) {
    bars.push(<Bar top={500} scroll={offset} index={i} />);
  }
  return (
    <div className={classes.bottomLeft} onWheel={(e) => wheel(e)}>
      {bars}
    </div>
  );
}

export default Bars;
