import React from 'react';
import css from './SearchMovies.module.css';

import MoviesItem from './MoviesItem';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      <MoviesItem movies={movies} />
    </ul>
  );
};

export default MovieList;
