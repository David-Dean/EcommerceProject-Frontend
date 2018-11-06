import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Authentication from './Authenticate'
import TopComponent from './topComponent.js'

import './App.css';

class App extends Component {
    render() {
        return (<BrowserRouter>
                  <div className="App">
                  <TopComponent/>
                   <Authentication/>
                  </div>
                </BrowserRouter>
        );
    }
}

export default App;
