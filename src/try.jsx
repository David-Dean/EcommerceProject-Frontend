import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Authentication from '/Authenticate'

import './App.css';

class App extends Component {
    render() {
        return (<BrowserRouter>
            <div className="App">
                <div >SIGNUP HERE</div>
                <Authentication>
                </Authentication>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
