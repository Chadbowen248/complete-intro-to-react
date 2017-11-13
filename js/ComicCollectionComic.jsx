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
`;
const ComicImage = styled.img`
  width: 100%;
  height: 85%;
`;
const ComicTitle = styled.p`
font-size: 1vw;
font-family: 'Fjalla One', sans-serif;
color: #333;
`;
const ComicDeleteBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const ComicCollectionComic = props => (
  <SingleComic>
    <ComicImage
      src={props.details.image.medium_url}
      alt="comic"
    />
    <ComicTitle>
      {props.details.finalName.length > 47
        ? `${props.details.finalName.substring(0, 47)} ...`
        : props.details.finalName}
    </ComicTitle>
    <ComicDeleteBtn
      className="comic-delete-button"
      onClick={() => props.removeComic(`comic-${props.details.id}`)}
    >
      <img src="public/img/close.png" alt="close" />
    </ComicDeleteBtn>
  </SingleComic>
);

export default ComicCollectionComic;

ComicCollectionComic.propTypes = {
  details: shape({}).isRequired,
  removeComic: func.isRequired
};
