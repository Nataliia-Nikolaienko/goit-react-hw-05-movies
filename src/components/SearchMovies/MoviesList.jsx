import React from 'react';
import css from './SearchMovies.module.css';

import MoviesItem from './MoviesItem';

const MovieList = ({ movies }) => {
  return (
    <div className={css.trendingMovieContainer}>
      <ul className={css.movieList}>
        <MoviesItem movies={movies} />
      </ul>
    </div>
  );
};

export default MovieList;
