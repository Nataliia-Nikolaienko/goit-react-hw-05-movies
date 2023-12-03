import { useState } from 'react';
import React from 'react';
import css from './Movies.module.css';

const Movies = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchMovie.trim() === '') {
      return alert('Please enter the name of the movie');
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <div className={css.inputWrapper}>
        <button type="submit" className={css.searchButton}>
          {/* <span className={css.searchButtonLabel}>Search</span>
        <span>
          <FcSearch className={css.icon} />
        </span> */}
          Search
        </button>
        <input
          name="query"
          className={css.searchInput}
          type="text"
          value={searchMovie}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={e => setSearchMovie(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Movies;
