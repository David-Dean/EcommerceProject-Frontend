import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemDetails extends Component{
    constructor(){
        super();
        this.state={
            itemId: ''
        }
    }


    // addToCart(){
    //     fetch('/addToCart', {
    //         method: "POST",
    //         body: nu
    //     })
    // }

    ComponentDidMount(){
        if (!this.state.itemID){
            return(<div>Loading..</div>)
        }else
        fetch( )
    }
    render(){
        return (<div>
                    <img src='{this.props.source}' ></img>
                    <div> {this.props.title} </div>
                    <div> {this.props.description}</div>
                    <div> PRICE </div>
                 
                    <button value='Add to Cart' /*onClick={this.addToCart}*/ ></button>
        </div>)
        
    }
}

let MapStateToProps= function(store){
    return{
        itemId: this.store.item.itemId
    }
}
let ConnectedItemDetails = connect(MapStateToProps)(ItemDetails)
export default ConnectedItemDetails


