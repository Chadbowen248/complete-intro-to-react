import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ComicCollection from './Landing';
import Search from './Search';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={ComicCollection} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
