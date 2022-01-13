import classes from "./Target.module.scss";
import { useEffect, useRef, useState } from "react";
function Target() {
  let [mousePos, setMousePos] = useState([100, 50]);
  let [boundingBox, setBoundingBox] = useState([]);
  let wrapperRef = useRef();
  let targetRef = useRef();
  let smallerTargetRef = useRef();
  let leftHorizontalLineRef = useRef();
  let rightHorizontalLineRef = useRef();
  let bottomVerticalLineRef = useRef();
  let topVerticalLineRef = useRef();

  useEffect(() => {
    setBoundingBox([
      wrapperRef.current.getBoundingClientRect().x,
      wrapperRef.current.getBoundingClientRect().y,
    ]);
  }, []);

  function enterFirstHeader() {
    targetRef.current.style.width = "50px";
    targetRef.current.style.height = "50px";
    targetRef.current.style.outlineWidth = "15px";
    smallerTargetRef.current.style.width = "25px";
    smallerTargetRef.current.style.height = "25px";
  }

  function exitFirstHeader() {
    targetRef.current.style.width = "5px";
    targetRef.current.style.height = "5px";
    targetRef.current.style.outlineWidth = "5px";
    smallerTargetRef.current.style.width = "0px";
    smallerTargetRef.current.style.height = "0px";
  }

  function enterSecondHeader() {
    targetRef.current.style.width = "50px";
    targetRef.current.style.height = "50px";
    leftHorizontalLineRef.current.style.opacity = 1;
    rightHorizontalLineRef.current.style.opacity = 1;
    topVerticalLineRef.current.style.opacity = 1;
    bottomVerticalLineRef.current.style.opacity = 1;
  }

  function exitSecondHeader() {
    targetRef.current.style.width = "5px";
    targetRef.current.style.height = "5px";
    leftHorizontalLineRef.current.style.opacity = 0;
    rightHorizontalLineRef.current.style.opacity = 0;
    topVerticalLineRef.current.style.opacity = 0;
    bottomVerticalLineRef.current.style.opacity = 0;
  }

  return (
    <div
      ref={wrapperRef}
      className={classes.bottomRight}
      onMouseMove={(e) => setMousePos([e.clientX, e.clientY])}
    >
      <div
        className={classes.target}
        ref={targetRef}
        style={{
          top:
            Math.min(
              mousePos[1] - boundingBox[1] - 12.5,
              boundingBox[1] - 100
            ) + "px",
          left:
            Math.min(mousePos[0] - boundingBox[0] - 12.5, boundingBox[0] + 10) +
            "px",
        }}
      />

      <div
        className={classes.smallerTarget}
        ref={smallerTargetRef}
        style={{
          top: mousePos[1] - boundingBox[1] + "px",
          left: mousePos[0] - boundingBox[0] + "px",
        }}
      />

      <div
        className={classes.horizontalLine}
        ref={leftHorizontalLineRef}
        style={{
          top: mousePos[1] - boundingBox[1] + 10 + "px",
          left: mousePos[0] - boundingBox[0] - 35 + "px",
        }}
      />

      <div
        className={classes.horizontalLine}
        ref={rightHorizontalLineRef}
        style={{
          top: mousePos[1] - boundingBox[1] + 10 + "px",
          left: mousePos[0] - boundingBox[0] + 30 + "px",
        }}
      />

      <div
        className={classes.verticalLine}
        ref={topVerticalLineRef}
        style={{
          top: mousePos[1] - boundingBox[1] - 35 + "px",
          left: mousePos[0] - boundingBox[0] + 12 + "px",
        }}
      />

      <div
        className={classes.verticalLine}
        ref={bottomVerticalLineRef}
        style={{
          top: mousePos[1] - boundingBox[1] + 30 + "px",
          left: mousePos[0] - boundingBox[0] + 12 + "px",
        }}
      />
      <div
        className={classes.header}
        style={{ top: "15vh" }}
        onMouseEnter={enterFirstHeader}
        onMouseOut={exitFirstHeader}
      >
        WHAT'S YOUR GOAL?
      </div>
      <div
        className={classes.header}
        style={{ top: "30vh" }}
        onMouseEnter={enterSecondHeader}
        onMouseOut={exitSecondHeader}
      >
        AIM FOR IT
      </div>
    </div>
  );
}

export default Target;
