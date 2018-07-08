var Search = (props) => {
  var onChangeSearchBox = props.onChangeSearchBox;
  var handleClick = props.handleClick;
  var searchInput = props.searchInput;
  return (
  <div className = "search-bar">
  <input className="form-control" type="text" onChange = {onChangeSearchBox} />
    <button className="btn hidden-sm-down" onClick = {handleClick}> Search
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
  );
};
window.Search = Search;