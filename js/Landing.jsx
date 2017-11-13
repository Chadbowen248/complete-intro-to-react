import React from "react";

class ComicCollection extends React.Component {
 state = {
   collection: []
 }
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Search" />
        <a>or Browse All</a>
      </div>
    );
  }
}

export default ComicCollection;

// this should be comics collection page
