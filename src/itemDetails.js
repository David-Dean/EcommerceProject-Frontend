import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemDetails extends Component{
    constructor(){
        super();
        this.state={
            itemId: ''
            
        }
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(){
        fetch('/addToCart', {
            method: "POST",
            body: JSON.stringify({itemId: this.props.itemId, username: this.props.username})
        }).then(x=>x.text())
        .then(response=>{
            return 
        })     
    }

    componentDidMount(){
        // if (!this.props.itemId){
        //     return(<div>Loading..</div>)
        // }else
        fetch('/getItem', {
            method:"POST",
            body: JSON.stringify({itemId: this.props.itemId})
        }).then(x=>x.text())
        .then(function(response){
            let parsed = JSON.parse(response);
            debugger
           this.setState({itemInfo: {title: parsed.title,
            description : parsed.description,
            price : parsed.price,
            category: parsed.category,
            itemId:parsed.itemID}})
                
            
        }.bind(this))
    }
    render(){
        if(this.state.itemInfo){
        return (<div>
                    {/* <img src={this.state.itemInfo.source} ></img> */}
                    <div> {this.state.itemInfo.title} </div>
                    <div> {this.state.itemInfo.description}</div>
                    <div> PRICE </div>
                 
                    <button value='Add to Cart' onClick={this.addToCart} ></button>
        </div>)
        
    }return (<div>Loading..</div>)
}
}

let MapStateToProps= function(store){
    return{
        itemId: store.itemId,
        username: store.username
       
    }
}
let ConnectedItemDetails = connect(MapStateToProps)(ItemDetails)
export default ConnectedItemDetails


