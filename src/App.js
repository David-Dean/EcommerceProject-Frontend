import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Authentication from './Authenticate'
import TopComponent from './topComponent.js'

import './App.css';

class App extends Component {
    render() {

      if(this.state.username){
        return (<BrowserRouter>
                  <div className="App">

                   <Authentication/>
                  </div>
                </BrowserRouter>
        );
    }else
    return (  <div>
                 <TopComponent/>

              </div>)

  
  }
}



let ConnectedApp = connect()(App)
export default ConnectedApp;
