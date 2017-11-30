import React from "react"
import Axios from "axios"
import ComicCollectionResult from "./ComicCollectionResult"

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
    const firstSearch = this.state.results.map(comic =>
      <ComicCollectionResult
        key={comic.id}
        details={comic}
        addComic={this.addComic}
        isOnlyIssue={comic.count_of_issues}
        deeperSearch={this.deeperSearch}
        haveImagesLoaded={this.haveImagesLoaded}
        modal={this.state.modal}
      />
    )
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
        {firstSearch}
      </div>
    )
  }
}

export default Search
