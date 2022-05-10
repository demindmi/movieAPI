import React from "react";

import css from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={css.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
