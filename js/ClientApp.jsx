import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import base from "./base";
import ComicCollection from "./Landing";
import Search from "./Search";
import Navigation from "./Navigation";


class App extends React.Component {
  state = {
    collection: []
  }
  componentWillMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "collection"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Route exact path="/" render={() => <ComicCollection collection={this.state.collection}/>}/>
          <Route path="/search" render={() => <Search collection={this.state.collection}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("app"));
