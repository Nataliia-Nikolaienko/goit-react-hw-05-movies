import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

import { movieDetails } from 'api/moviesApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  // const [error, setError] = useState(null);

  // const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        const results = await movieDetails(movieId);
        setMovie(results);
      } catch ({ response }) {
        // setError(error.response.data);
        console.log(response.data.message);
      }
    };
    fetchPosts();
  }, [movieId]);

  if (movie) {
    const { title, overview, release_date, genres, vote_average, poster_path } =
      movie;
    const date = new Date(release_date).getUTCFullYear();
    const genre = genres.map(genre => genre.name).join(', ');
    const userScore = vote_average.toFixed(1);
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
      <div className={css.container}>
        {/* {error && <h1>{error}</h1>} */}
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
          <h3 className={css.movieDetailsTitle}>Additional information</h3>
          <ul className={css.additionalList}>
            <li>
              <NavLink
                to="cast"
                className={css.additionalInfoItem}
                // state={location}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={css.additionalInfoItem}
                // state={location.state}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default MovieDetails;
