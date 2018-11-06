import React, {Component} from 'react';
import {connect} from 'react-redux';
import TopComponent from './topComponent.js'



class HomePage extends Component{
    constructor(){
        super();
        this.state={}
    }

    displayItems(item){
        return <h1>item</h1>
    }

    getItems(){
        fetch('/getAllItems')
        .then(x=>x.text())
        .then(responseBody=>{
            let parsed=JSON.parse(responseBody);
            
            let title=parsed.title;
            let price = parsed.price;
            // picture = parsed. picture ?
        }


    return displayItems()

    }
    render(){
        <TopComponent/>
        {this.getItems}
    }
}


let mapStateToProps = function(state){
    return{
        title: state.title
    }
}  //// look this up  in redux workshop


let ConnectedHomePage = connect(mapStateToProps)(HomePage)
export default ConnectedHomePage