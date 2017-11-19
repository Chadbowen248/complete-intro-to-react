import React from "react"
import Axios from "axios"

class Search extends React.Component {
  state = {
    searchTerm: "",
    results: []
  }

  searchForComic = () => {
    const searchTerm = this.textInput.value
    Axios.get(`http://localhost:3000/comicvine_api?search_term=${searchTerm}`)
    .then(results => this.setState({results: results.data}))
  }
  render() {
    return (
      <div>
        <input
          name="search"
          type="text"
          ref={input => {
            this.textInput = input
          }}
        />
        <input type="submit" onClick={this.searchForComic} />
      </div>
    )
  }
}

export default Search
