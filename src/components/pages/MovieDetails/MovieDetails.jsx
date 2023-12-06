import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { movieDetails } from 'api/moviesApi';
import css from './MovieDetails.module.css';

import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const results = await movieDetails(movieId);
        setMovie(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
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
      <>
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
        <div className={css.container}>
          <button onClick={() => navigate(from)} className={css.BackBtn}>
            {' '}
            &#129128; Go back
          </button>

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
              <h3 className={css.movieAdditionalTitle}>
                Additional information
              </h3>
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
        </div>
      </>
    );
  }
};

export default MovieDetails;
