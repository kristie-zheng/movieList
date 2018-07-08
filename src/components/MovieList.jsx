var MovieList = (props) => {
  var searchInput = props.searchInput;
  var movies = props.movies;
  var rows = [];
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i])
    if (movies[i].title === props.searchInput) {
      console.log(movies[i])
      rows.push(<MovieListEntry movie = {movies[i]} />);
      console.log(rows)
    }
  }
  return (
  <div className = "movie-list">
  {props.movies.map(movie => <MovieListEntry movie = {movie} />)}
  <div> {rows} </div>
  </div>
  );
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired,
  searchInput: React.PropTypes.string
};

window.MovieList = MovieList;