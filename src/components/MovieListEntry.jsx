var MovieListEntry = () => (
  <div>
  Movie Name Here
  </div>
  );

MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

window.MovieListEntry = MovieListEntry;