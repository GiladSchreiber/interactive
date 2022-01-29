import classes from "./Paralex.module.scss";
import { useState, useRef } from "react";
import Block from "./Block";
import { useEffect } from "react/cjs/react.development";

function Paralex() {
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const paralexRef = useRef();

  function wheel(e) {
    setOffset(offset > 20000 ? 0 : offset + e.deltaY);
  }

  useEffect(() => {
    let blocks = [];
    for (let i = 0; i < 100; i++) {
      blocks.push(
        <Block
          scroll={offset}
          center={paralexRef.current.getBoundingClientRect().width / 2.0}
        />
      );
    }
    setBlocks(blocks);
  }, [offset]);

  return (
    <div className={classes.topLeft} ref={paralexRef} onWheel={(e) => wheel(e)}>
      {blocks}
    </div>
  );
}

export default Paralex;
