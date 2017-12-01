import React from "react";
import styled from "styled-components";

const manualComicWrapper = styled.input`
  background-color: red;
`

const ManComic = props => {
  const manualEntryComic = {
    finalName: props.title,
    image: { medium_url: props.image },
    id: `man-${Date.now()}`
  };
  return (
    <div>
      <manualComicWrapper
        type="text"
        value={props.title}
        onChange={props.handleTitleInput}
      />

      <manualComicWrapper type="text" value={props.image} onChange={props.handleImagePath} />

      <button onClick={() => props.addComicManually(manualEntryComic)}>
        clickme
      </button>

    </div>
  );
};

export default ManComic;
