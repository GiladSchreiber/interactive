import classes from "./Body.module.scss";
import { useState } from "react";
import Arrow from "./Arrow";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Types from "../Types/Types";
import Triggers from "../Triggers/Triggers";
import Position from "../Position/Position";
import Values from "../Values/Values";
import Animations from "../Animations/Animations";
import End from "../End/End";

function Body() {
  let [page, setPage] = useState(0);

  let pages = [
    <Home />,
    <Events />,
    <Types />,
    <Triggers />,
    <Position />,
    <Values />,
    <Animations />,
    <End />,
  ];
  let names = [
    "home",
    "events",
    "types",
    "triggers",
    "position",
    "values",
    "animations",
    "end",
  ];

  function nextPage() {
    setPage((page + 1) % names.length);
  }

  function prevPage() {
    setPage((page - 1 + names.length) % names.length);
  }
  return (
    <div className={classes.wrapper}>
      {pages[page]}
      {page > 0 ? (
        <Arrow
          direction="prev"
          setPage={prevPage}
          name={names[(page - 1 + names.length) % names.length]}
        />
      ) : null}
      <Arrow
        direction="next"
        setPage={nextPage}
        name={names[(page + 1) % names.length]}
      />
    </div>
  );
}

export default Body;
