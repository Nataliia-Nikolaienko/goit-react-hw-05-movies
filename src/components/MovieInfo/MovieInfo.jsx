import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const from = location.state?.from || '/';
  if (movie) {
    const { title, overview, release_date, genres, vote_average, poster_path } =
      movie;
    const date = new Date(release_date).getUTCFullYear();
    const genre = genres.map(genre => genre.name).join(', ');
    const userScore = vote_average.toFixed(1);
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    return (
      <>
        <div className={css.detailsWrapper}>
          <div className={css.movieImgContainer}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              height="350"
              alt={title}
              className={css.movieImg}
            />
          </div>
          <div className={css.movieInfoContainer}>
            <h2 className={css.movieTitle}>
              {title} ({date})
            </h2>
            <p className={css.description}>Use Score: {userScore}%</p>
            <h3 className={css.movieDetailsTitle}>Overview</h3>
            <p className={css.description}>{overview}</p>
            <h3 className={css.movieDetailsTitle}>Genres</h3>
            <p className={css.description}>{genre}</p>
          </div>
        </div>
        <div className={css.additionalInfoContainer}>
          <div>
            <h3 className={css.movieAdditionalTitle}>Additional information</h3>
            <ul className={css.additionalList}>
              <li>
                <NavLink
                  to="cast"
                  state={{ from }}
                  className={css.additionalInfoItem}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  state={{ from }}
                  className={css.additionalInfoItem}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </>
    );
  }
};
export default MovieInfo;
