import classes from "./Types.module.scss";
import Type from "./Type";
import { useState } from "react";
function Types() {
  let [clicked, setClicked] = useState(false);
  return (
    <div
      className={classes.typesWrapper}
      onClick={() => setClicked(true)}
      style={{ cursor: clicked ? "auto" : "pointer" }}
    >
      <Type
        header="UI Events"
        top={"6vh"}
        left={"4vw"}
        clicked={clicked}
        items={[
          "TextSelectionEvent",
          "MouseEvent",
          "TrackEvent",
          "ScrollEvent",
          "KeyboardEvent",
          "MediaEvent",
          "SpeechEvent",
          "PrintEvent",
        ]}
      />
      <Type
        header="Form Events"
        top={"6vh"}
        left={"36vw"}
        clicked={clicked}
        items={[
          "FocusEvent",
          "BlurEvent",
          "InputEvent",
          "SubmitEvent",
          "ChangeEvent",
          "ResetEvent",
        ]}
      />
      <Type
        header="Window Events"
        top={"6vh"}
        left={"68vw"}
        clicked={clicked}
        items={[
          "ClipboardEvent",
          "CloseEvent",
          "ResizeEvent",
          "FullScreenEvent",
          "Drag'n'dropEvent",
          "OpenEvent",
          "searchEvent",
        ]}
      />
      <Type
        header="Server Events"
        top={"48vh"}
        left={"4vw"}
        clicked={clicked}
        items={[
          "LoadEvent",
          "ErrorEvent",
          "FetchEvent",
          "ProgressEvent",
          "MessageEvent",
          "PageTransitionEvent",
          "ConnectionEvent",
        ]}
      />
      <Type
        header="CSS Events"
        top={"48vh"}
        left={"36vw"}
        clicked={clicked}
        items={["AnimationEvent", "TransitionEvent", "SVGEvent"]}
      />
      <Type
        header="Mobile Events"
        top={"48vh"}
        left={"68vw"}
        clicked={clicked}
        items={[
          "TouchEvent",
          "DeviceOrientationEvent",
          "DeviceMotionEvent",
          "GesturesEvent",
        ]}
      />
    </div>
  );
}

export default Types;
