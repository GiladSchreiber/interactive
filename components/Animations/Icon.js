import classes from "./Icon.module.scss";

function Icon({ url }) {
  return (
    <div
      className={classes.iconWrapper}
      style={{
        backgroundImage: "url('/interactive/assets/" + url + "')",
      }}
    ></div>
  );
}

export default Icon;
