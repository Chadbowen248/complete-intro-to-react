import React from "react";
import styled from "styled-components";
import ComicCollectionComic from "./ComicCollectionComic";

const ComicWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
margin-top: 1.5em;
margin-bottom: 1.5em;
justify-content: flex-start;
`;

class ComicCollection extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  removeComic = comic => {
    this.state.collection[comic] = null;
    this.setState({ collection: this.state.collection });
  };

  render() {
    return (
      <div>
        <h1>Collection</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <ComicWrapper>
          {Object.entries(this.props.collection)
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
              <ComicCollectionComic
                details={comic[1]}
                key={comic[1].id}
                removeComic={this.removeComic}
              />
            ))}
        </ComicWrapper>
      </div>
    );
  }
}

export default ComicCollection;

// this should be comics collection page
