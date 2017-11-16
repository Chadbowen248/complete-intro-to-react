import React from "react"
import Axios from "axios"

class Search extends React.Component {
  render() {
    return (
      <form action="http://localhost:3000/comicvine_api" method="get">
        <input
          name="search"
          type="text"
          ref={input => {
            this.textInput = input
          }}
        />
        <button>click me</button>
      </form>
    )
  }
}

export default Search

// this should be where you add comics from comic vine
// ;<input
//   className="comicSearch"
//   onFocus={() => {
//     this.setState({ results: [], temp: [], flag: false, fade: false, images: 0 })
//     this.textInput.value = ""
//   }}
