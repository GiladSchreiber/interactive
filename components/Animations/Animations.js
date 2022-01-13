import classes from "./Animations.module.scss";
import Mobile from "./Mobile";
import MobileStatic from "./MobileStatic";
function Animations() {
  return (
    <div className={classes.animationsWrapper}>
      <MobileStatic left={"20vw"} />
      <Mobile left={"60vw"} />
    </div>
  );
}

export default Animations;
