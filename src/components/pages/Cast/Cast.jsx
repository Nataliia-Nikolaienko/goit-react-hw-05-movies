import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from 'api/moviesApi';

import CastItem from './CastItem';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await movieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [movieId]);

  return (
    <div className={css.castListContainer}>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <ul className={css.castList}>
        <CastItem cast={cast} />
      </ul>
    </div>
  );
};

export default Cast;
