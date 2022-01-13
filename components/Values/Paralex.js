import classes from "./Paralex.module.scss";
import { useState } from "react";
import Block from "./Block";

function Paralex() {
  const [offset, setOffset] = useState(0);

  function wheel(e) {
    setOffset(offset > 20000 ? 0 : offset + e.deltaY);
  }

  var blocks = [];
  for (var i = 0; i < 100; i++) {
    blocks.push(<Block scroll={offset} />);
  }

  return (
    <div className={classes.topLeft} onWheel={(e) => wheel(e)}>
      {blocks}
    </div>
  );
}

export default Paralex;
