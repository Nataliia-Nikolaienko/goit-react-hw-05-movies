import css from './Reviews.module.css';

const ReviewsItem = ({ reviews }) => {
  return reviews.map(({ id, author, content }) => {
    return (
      <li key={id} className={css.reviewsListItem}>
        <h3 className={css.reviewTitle}>Author: {author}</h3>
        <p className={css.reviewContent}>{content}</p>
      </li>
    );
  });
};

export default ReviewsItem;
