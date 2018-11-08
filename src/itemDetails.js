import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemDetails extends Component{
    constructor(){
        super();
        this.state={
            itemId: '',
            
        }
    }

    addToCart(){
        fetch('/addToCart', {
            method: "POST",
            body: {itemId: this.props.itemId}
        }).then(x=>x.text())        
    }

    ComponentDidMount(){
        if (!this.props.itemId){
            return(<div>Loading..</div>)
        }else
        fetch('/getItem', {
            method:"POST",
            body: {itemId: this.props.itemId}
        }).then(x=>x.text())
        .then(function(response){
            let parsed = JSON.parse(response);

           this.setState({itemInfo: {title: parsed.title,
            description : parsed.description,
            price : parsed.price,
            category: parsed.category,
            itemId:parsed.itemID}})
                
            
        })
    }
    render(){
        return (<div>
                    <img src={this.state.itemInfo.source} ></img>
                    <div> {this.state.itemInfo.title} </div>
                    <div> {this.state.itemInfo.description}</div>
                    <div> PRICE </div>
                 
                    <button value='Add to Cart' onClick={this.addToCart} ></button>
        </div>)
        
    }
}

let MapStateToProps= function(store){
    return{
        itemId: store.itemId,
       
    }
}
let ConnectedItemDetails = connect(MapStateToProps)(ItemDetails)
export default ConnectedItemDetails


