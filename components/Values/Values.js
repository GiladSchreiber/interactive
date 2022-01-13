import classes from "./Values.module.scss";
import Bars from "./Bars";
import Landscape from "./Landscape";
import Paralex from "./Paralex";
import Gradient from "./Gradient";
function Values() {
  return (
    <div className={classes.valuesWrapper}>
      <Bars />
      <Landscape />
      <Paralex />
      <Gradient />
    </div>
  );
}

export default Values;
