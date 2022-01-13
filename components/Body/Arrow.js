import classes from "./Arrow.module.scss";

function Arrow({ direction, setPage, name }) {
  return (
    <div
      className={classes.arrow}
      style={{
        left: direction == "prev" ? 0 : "auto",
        right: direction == "next" ? 0 : "auto",
      }}
      onClick={() => setPage()}
    >
      <svg
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: direction == "next" ? "scaleX(-1)" : "scaleX(1)",
        }}
      >
        <polygon points="0 0, 100 100, 0 100" className={classes.shape} />
      </svg>
      <div
        className={classes.name}
        style={{
          left: direction == "prev" ? "10px" : "auto",
          right: direction == "next" ? "10px" : "auto",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default Arrow;
