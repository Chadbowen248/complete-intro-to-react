import React from "react";
import styled from "styled-components";
import { shape, func } from "prop-types";

const SingleComic = styled.div`
width: 23%;
margin-left: 1%;
border: 1px solid #ccc;
padding: 1em;
margin-top: .5em;
margin-bottom: .5em;
margin-right: 1%;
`
const ComicImage = styled.img`
  width: 100%;
`

const ComicCollectionComic = props =>
  <SingleComic>
    <ComicImage
      className="comic-collection__image"
      src={props.details.image.medium_url}
      alt="comic"
    />
    <p className="comic-container__title">
      {props.details.finalName.length > 47 ? `${props.details.finalName.substring(0,47)} ...` : props.details.finalName}
    </p>
    <button
      className="comic-delete-button"
      onClick={() => props.removeComic(`comic-${props.details.id}`)}
    >
      <img
        className="comic-delete-image"
        src="public/img/close.png"
        alt="close"
      />
    </button>
  </SingleComic>;

export default ComicCollectionComic;

ComicCollectionComic.propTypes = {
  details: shape({}).isRequired,
  removeComic: func.isRequired
};
