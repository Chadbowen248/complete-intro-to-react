import React from "react";
import styled from "styled-components";
import { shape } from "prop-types";
import ComicCollectionComic from "./ComicCollectionComic";

const ComicWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
margin-top: 1.5em;
margin-bottom: 1.5em;
justify-content: flex-start;
padding-right: .5em;
padding-left: .5em;
`;

const ComicSearch = styled.input`
margin-top: 1.5em;
width: 100%;
height: 50px;
text-align: center;
`

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
        <ComicSearch
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
ComicCollection.propTypes = {
  collection: shape.isRequired,
};

export default ComicCollection;

// this should be comics collection page
