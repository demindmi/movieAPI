import React from "react";

import Movie from "./Movie";
import css from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={css["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
