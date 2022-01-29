import classes from "./Events.module.scss";
import { useState, useEffect } from "react";

function Events() {
  let [eventType, setEventType] = useState("no event");
  useEffect(() => {
    window.addEventListener("keydown", (e) =>
      setEventType(e.key + " key down ")
    );
    window.addEventListener("keyup", (e) => setEventType(e.key + " key up "));

    window.addEventListener("wheel", (e) => setEventType("scroll"));

    window.addEventListener("contextmenu", (e) => setEventType("right click"));
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", (e) =>
        setEventType(e.key + " key down ")
      );
      window.removeEventListener("keyup", (e) =>
        setEventType(e.key + " key up ")
      );
      window.addEventListener("wheel", (e) => setEventType("scroll"));

      window.addEventListener("contextmenu", (e) =>
        setEventType("right click")
      );
    };
  }, []);
  return (
    <div
      className={classes.eventsWrapper}
      onClick={() => setEventType("left click")}
      onMouseMove={() => setEventType("mouse move")}
    >
      <div
        className={classes.title}
        onMouseOver={() => setEventType("mouse hover")}
      >
        WE WATCH YOU
      </div>
      <div className={classes.eventTitle}>{eventType + "\ndetected"}</div>
    </div>
  );
}

export default Events;
