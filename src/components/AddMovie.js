import React, { useRef, useState } from "react";

import css from "./AddMovie.module.css";

function AddMovie(props) {
  const [error, setError] = useState(false);
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    if (
      titleRef.current.value.trim().length !== 0 &&
      openingTextRef.current.value.trim().length !== 0 &&
      releaseDateRef.current.value.trim().length !== 0
    ) {
      setError(false);
      const movie = {
        title: titleRef.current.value.trim(),
        openingText: openingTextRef.current.value.trim(),
        releaseDate: releaseDateRef.current.value.trim(),
      };
      titleRef.current.value = "";
      openingTextRef.current.value = "";
      releaseDateRef.current.value = "";
      props.onAddMovie(movie);
    } else {
      setError(true);
    }
  }

  const onChangeHandler = () => {
    if (
      titleRef.current.value.trim().length !== 0 &&
      openingTextRef.current.value.trim().length !== 0 &&
      releaseDateRef.current.value.trim().length !== 0
    )
      setError(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={css.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          onChange={onChangeHandler}
        />
      </div>
      <div className={css.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          onChange={onChangeHandler}></textarea>
      </div>
      <div className={css.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          ref={releaseDateRef}
          onChange={onChangeHandler}
        />
      </div>
      <button hidden={error ? true : false}>Add Movie</button>
      {error && <p className={css.error}>Please fill out entire form</p>}
    </form>
  );
}

export default AddMovie;
