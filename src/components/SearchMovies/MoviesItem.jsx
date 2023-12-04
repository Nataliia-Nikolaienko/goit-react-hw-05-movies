import React from 'react';
import { Link } from 'react-router-dom';
import css from './SearchMovies.module.css';

const MoviesItem = ({ movies }) => {
  return movies.map(({ id, title, poster_path }) => {
    return (
      <li className={css.movieItem} key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          height="350"
        />
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    );
  });
};

export default MoviesItem;
