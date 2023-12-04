import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.containerHome}>
      <TrendingMovies />
    </div>
  );
};

export default HomePage;
