import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './SearchMovies.module.css';

const MoviesItem = ({ movies }) => {
  const location = useLocation();
  return movies.map(({ id, title, poster_path }) => {
    return (
      <li className={css.movieItem} key={id}>
        <div className={css.movieItemContainer}>
          <Link
            to={`/movies/${id}`}
            className={css.movieTitle}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              height="350"
              className={css.posterImg}
            />
            {title}
          </Link>
        </div>
      </li>
    );
  });
};

export default MoviesItem;
