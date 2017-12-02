import React from "react";

const inputStyle = {
  margin: '0 auto',
  marginTop: '10px',
  display: 'block',
  padding: '5px',
  width: '95%',
  height: '40px',
  textAlign: 'center'
};

const addBtn = {
  backgroundColor: 'transparent',
  marginLeft: '30px',
  marginTop: '10px',
  width: '170px',
  padding: '5px'
}

const wrapper = {
  borderBottom: '.25px solid #ccc',
  paddingBottom: '20px'
}

const ManComic = props => {
  const manualEntryComic = {
    finalName: props.title,
    image: { medium_url: props.image },
    id: `man-${Date.now()}`
  };
  return (
    <div style={wrapper}>

      <input
        placeholder="Title"
        style={inputStyle}
        type="text"
        value={props.title}
        onChange={props.handleTitleInput}
      />

      <input placeholder="Image URL" style={inputStyle} type="text" value={props.image} onChange={props.handleImagePath} />

      <button style={addBtn} onClick={() => props.addComicManually(manualEntryComic)}>
        Add
      </button>


    </div>
  );
};

export default ManComic;
