import { useState } from 'react';

import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return alert('Please enter the name of the movie');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <div className={css.searchBarContainer}>
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
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
