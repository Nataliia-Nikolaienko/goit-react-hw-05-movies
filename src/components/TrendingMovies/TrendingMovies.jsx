import { trendingFilms } from 'api/moviesApi';
import { useState, useEffect } from 'react';
// import css from './TrendingMovies.module.css';

import MovieList from 'components/SearchMovies/MoviesList';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await trendingFilms();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default TrendingMovies;
