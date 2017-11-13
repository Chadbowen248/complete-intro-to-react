import React from "react";
import base from "./base";

class ComicCollection extends React.Component {
 state = {
   collection: []
 }
 componentWillMount() {
  this.ref = base.syncState(`/`, {
    context: this,
    state: "collection"
  })
}

componentWillUnmount() {
  base.removeBinding(this.ref)
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
