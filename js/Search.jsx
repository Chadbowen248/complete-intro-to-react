import React from "react";
import Axios from "axios";
import styled from "styled-components";
import ComicCollectionResult from "./ComicCollectionResult";

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

const ComicSearchComicVine = styled.input`
margin-top: 1.5em;
width: 100%;
height: 50px;
text-align: center;
`;
const SubmitButton = styled.input`
background-color: transparent;
margin:30px auto;
width: 200px;
display: block;
padding: 5px;
`;

class Search extends React.Component {
  state = {
    searchTerm: "",
    results: []
  };



  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  searchForComic = () => {
    const searchTerm = this.state.searchTerm;
    Axios.get(
      `http://localhost:3000/comicvine_api?search_term=${searchTerm}`
    ).then(results => this.setState({ results: results.data }));
  };
  render() {
    const firstSearch = this.state.results.map(comic => (
      <ComicCollectionResult
        key={comic.id}
        details={comic}
        addComic={this.props.addComic}
        isOnlyIssue={comic.count_of_issues}
        deeperSearch={this.deeperSearch}
        haveImagesLoaded={this.haveImagesLoaded}
        modal={this.state.modal}
      />
    ));
    return (
      <div>
        <ComicSearchComicVine
          name="search"
          type="text"
          onChange={this.handleChange}
        />
        <SubmitButton type="submit" onClick={this.searchForComic} asdf/>
        <ComicWrapper>
          {firstSearch}
        </ComicWrapper>
      </div>
    );
  }
}

export default Search;
