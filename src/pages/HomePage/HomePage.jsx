import React from 'react';
import { trendingFilms } from 'api/moviesApi';
import { useState, useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import MovieList from 'components/SearchMovies/MoviesList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await trendingFilms();
        setMovies(data.results);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={css.containerHome}>
      <div className={css.trendingContainer}>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
