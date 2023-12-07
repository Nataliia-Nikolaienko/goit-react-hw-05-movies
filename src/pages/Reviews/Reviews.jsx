import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'api/moviesApi';
import ReviewsItem from './ReviewsItem';
import Loader from 'components/Loader/Loader';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        const results = await movieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [movieId]);
  // const notReviews = 'We do not have any reviews for this movie';
  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      <div className={css.reviewsContainer}>
        <ul className={css.reviewsList}>
          {reviews.length ? (
            <ReviewsItem reviews={reviews} />
          ) : (
            <p className={css.reviewsDescr}>
              We do not have any reviews for this movie
            </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
