import React, {Component} from 'react';
import {connect} from 'react-redux';
import TopComponent from './topComponent.js'



class HomePage extends Component{
    constructor(){
        super();
        this.state={}
        this.getItems=this.getItems.bind(this)
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
        })
    }


    render(){
        return(<div><TopComponent/>
                {this.getItems()}
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