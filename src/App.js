import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Index from './Components/Index.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
