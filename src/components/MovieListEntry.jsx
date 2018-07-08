var MovieListEntry = (props) => {
  return (
  <div>
  {props.movie.title}
  </div>
  );
};
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

window.MovieListEntry = MovieListEntry;