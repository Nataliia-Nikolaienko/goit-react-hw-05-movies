import React from 'react';
import { Link } from 'react-router-dom';
import css from './SearchMovies.module.css';

const MoviesItem = ({ movies }) => {
  return movies.map(({ id, name, title }) => {
    return (
      <Link to={`/movies/${id}`} key={id}>
        <li className={css.movieItem}>
          <h2>{name || title}</h2>
        </li>
      </Link>
    );
  });
};

export default MoviesItem;
