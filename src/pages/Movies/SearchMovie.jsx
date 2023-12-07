import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/moviesApi';
import css from './SearchMovie.module.css';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from 'components/SearchMovies/MoviesList';
import Loader from 'components/Loader/Loader';

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const searchInput = searchMovies => {
    if (search === searchMovies) {
      return;
    }
    setSearchParams({ search: searchMovies });
    setMovies([]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await searchMovies(search);

        setMovies(movies => [...movies, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (search) {
      fetchPosts();
      document.querySelector('form').reset();
    }
  }, [search]);

  return (
    <div className={css.SearchMovieContainer}>
      <SearchBar onSubmit={searchInput} />
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      {<MovieList movies={movies} />}
    </div>
  );
};

export default SearchMovie;
