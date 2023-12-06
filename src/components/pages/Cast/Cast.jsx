import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from 'api/moviesApi';

import CastItem from './CastItem';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  // const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        const data = await movieCast(movieId);
        setCast(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPosts();
  }, [movieId]);

  return (
    <>
      {/* {error && <h1>{error}</h1>} */}
      <ul className={css.castList}>
        <CastItem cast={cast} />
      </ul>
    </>
  );
};

export default Cast;
