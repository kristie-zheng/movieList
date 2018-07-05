var MovieList = () => (
  <div className = "movie-list">
  <div><h3>movie entry goes here</h3></div>
  <div><h3>movie entry goes here</h3></div>
  <div><h3>movie entry goes here</h3></div>
  <div><h3>movie entry goes here</h3></div>
  </div>
  );

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.MovieList = MovieList;