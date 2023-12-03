import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Movies from './pages/Movies/Movies';
import Layout from './Layout/Layout';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';

const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="revies" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
