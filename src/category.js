import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from "./items.js"
import './App.css';

class Category extends Component{

    constructor(prop){
        super(prop);
        this.state={ 
            items : [],
         }
         this.differentFunction=this.differentFunction.bind(this)
    }
differentFunction(){
    fetch('/getItemsByCategory', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
              },
        body: JSON.stringify({category: this.props.categoryType})
    }).then(x=>x.text()
    ).then(function(response){
       let parsed=JSON.parse(response)
       this.setState({items: parsed})
    }.bind(this))
}


render(){
    this.differentFunction()
    return (<div>
                {this.state.items.map(function(item){
                    return (<Item
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        source={'/images/africanMask.jpg'}
                        itemId={item.itemID} />)
                })}
    </div>)
    }


}

let ConnectedCategory = connect()(Category)
export default ConnectedCategory