import React, {Component} from 'react';
import {connect} from 'react-redux';
import TopComponent from './topComponent.js'

import SideMenu from './sideMenu.js'

class HomePage extends Component{
    constructor(){
        super();
        this.state={}
        
    }
componentDidMount(){
   
        fetch('/getAllItems',{ 
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(x=>x.text())
        .then(responseBody=>{
            let parsed=JSON.parse(responseBody);
            this.props.dispatch({type:"getAllItems", items: parsed})
        })
    }
    

    render(){
        return(<div className="homepage">
            <TopComponent/>
            
                </div>
        )
    }
}

let mapStateToProps = function(state){
    return{
        title: state.title
    }
}  //// look this up  in redux workshop


let ConnectedHomePage = connect(mapStateToProps)(HomePage)
export default ConnectedHomePage