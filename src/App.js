import React from 'react';
import './styles/App.css';
import './styles/ProximaNova/stylesheet.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Posts from './pages/Posts';
import PostCity from './pages/postCity/PostCity';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/:name">
          <PostCity />
        </Route>
        <Redirect to="/posts" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
