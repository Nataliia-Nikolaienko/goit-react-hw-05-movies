import css from './Cast.module.css';

const CastItem = ({ cast }) => {
  return cast.map(({ id, name, profile_path, character }) => {
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
    return (
      <li key={id} className={css.castItem}>
        <div className={css.castContainer}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
            width="200"
            // height="225"
            className={css.castImg}
          />
          <div className={css.castDetailsContainer}>
            <h4 className={css.castTitle}>{name}</h4>
            <p className={css.castCharacter}>{character}</p>
          </div>
        </div>
      </li>
    );
  });
};

export default CastItem;
