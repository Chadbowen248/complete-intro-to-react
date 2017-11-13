import React from "react";
import base from "./base";
import ComicCollectionComic from "./ComicCollectionComic";

class ComicCollection extends React.Component {
  state = {
    collection: [],
    searchTerm: ''
  };
  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "collection"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  removeComic = comic => {
    this.state.collection[comic] = null
    this.setState({ collection: this.state.collection })
  }

  render() {
    return (
      <div className="landing">
        <h1>Collection</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <div className="comic-container">
          {Object.entries(this.state.collection)
            .sort((a, b) => {
              if (
                a[1].finalName.replace(/^Absolute /, "") <
                b[1].finalName.replace(/^Absolute /, "")
              )
                return -1;
              if (
                a[1].finalName.replace(/^Absolute /, "") >
                b[1].finalName.replace(/^Absolute /, "")
              )
                return 1;
              return 0;
            })
            .filter(
              comic =>
                comic[1].finalName
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(comic => (
              <ComicCollectionComic details={comic[1]} key={comic[1].id} removeComic={this.removeComic}/>
            ))}
        </div>
      </div>
    );
  }
}

export default ComicCollection;

// this should be comics collection page
