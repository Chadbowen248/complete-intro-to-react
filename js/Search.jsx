import React from 'react';


class Search extends React.Component {
  render(){
    return(
      <form action="http://localhost:3000/test" method="get">
        <input name="search_term"/>
        <button>click me</button>
      </form>
    )
  }
}

export default Search;


// this should be where you add comics from comic vine
