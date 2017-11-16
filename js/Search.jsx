import React from "react"
import Axios from "axios"

class Search extends React.Component {
  state = { searchTerm: "" }
  // searchComic = e => {
  //   e.preventDefault()
  //   alert("eaah")
  // }

  searchForComic = () => {
    const searchTerm = this.textInput.value
    // const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
    // const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
    // this.setState({ loaded: true, fade: false })
    // Axios.get(`http://localhost:3000/comicvine_api`).then(res => res.data.results).then(results => this.setState({ results }))
    Axios.get(`http://localhost:3000/comicvine_api?search_term=${searchTerm}`).then(res => console.log(res.data))
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
        <input className="comic-search__submit" type="submit" onClick={this.searchForComic} />
      </div>
    )
    // <form action="http://localhost:3000/comicvine_api" method="get">

    //   <button>click me</button>
    // </form>
  }
}

export default Search


// handleSearchTermChange = event => {
//   this.setState({ searchTerm: event.target.value })
// }
