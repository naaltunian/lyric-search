import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Index from './Components/Index.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from './context.js'

class App extends Component {
  render() {
    return (
      <Provider>
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
      </Provider>
    );
  }
}

export default App;
