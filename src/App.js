import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/products" exact component={ProductsContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
