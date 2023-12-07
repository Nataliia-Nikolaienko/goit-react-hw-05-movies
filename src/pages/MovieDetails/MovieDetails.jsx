import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { movieDetails } from 'api/moviesApi';
import css from './MovieDetails.module.css';

import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';

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

  return (
    <>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <div className={css.container}>
        <button onClick={() => navigate(from)} className={css.BackBtn}>
          {' '}
          &#129128; Go back
        </button>
        <MovieInfo movie={movie} />
      </div>
    </>
  );
  // }
};

export default MovieDetails;
