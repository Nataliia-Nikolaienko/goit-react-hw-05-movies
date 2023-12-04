const CastItem = ({ cast }) => {
  return cast.map(({ id, name, profile_path, character }) => {
    return (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
        />
        <h4>{name}</h4>
        <p>{character}</p>
      </li>
    );
  });
};

export default CastItem;
