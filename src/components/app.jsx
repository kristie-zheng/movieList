class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
}

  handleClick() {
    console.log('yes');
    //iterate through the list of movies that exists
    //if something matches the title
      //hide all other movies
  }

  onChangeSearchBox(event) {
    //console.log('thisis', this)
    this.setState({
      searchInput: event.target.value
    });
    console.log(event.target.value)
  }

  render() {
    return (
      <div>
      <div><h1> MovieList </h1></div>
      <div>
      <div> <Search handleClick = {this.handleClick.bind(this)} onChangeSearchBox = {this.onChangeSearchBox.bind(this)} searchInput = {this.state.searchInput}/> </div>
      <div> <MovieList searchInput = {this.state.searchInput} movies= {movies} /> </div>
      </div>
      </div>
    )
  }
}

