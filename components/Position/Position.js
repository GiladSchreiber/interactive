import classes from "./Position.module.scss";
import Directions from "./Directions";
import Glow from "./Glow";
import Letters from "./Letters";
import Target from "./Target";
function Position() {
  return (
    <div className={classes.positionWrapper}>
      <Glow />
      <Letters />
      <Directions />
      <Target />
    </div>
  );
}

export default Position;
