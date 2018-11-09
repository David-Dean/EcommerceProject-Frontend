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
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({itemId: this.props.itemId, username: this.props.username})
        }).then(x=>x.text())
        .then(response=>{
            let parsed = JSON.parse(response);
            this.dispatch({type: 'addToCart', content: parsed })
        })     
    }

    componentDidMount(){
        if (!this.props.itemId){
            return(<div>Loading..</div>)
        }else
        fetch('/getItem', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({itemId: this.props.itemId})
        }).then(x=>x.text())
        .then(function(response){
            let parsed = JSON.parse(response);
           this.setState({title: parsed.title,
            description : parsed.description,
            price : parsed.price,
            category: parsed.category,
            itemId:parsed.itemID})
                
            
        }.bind(this))
    }
    render(){
        if(this.state.title){
        return (<div>
                    {/* <img src={this.state.source} ></img> */}
                    
                    <div> {this.state.title} </div>
                    <div> {this.state.description}</div>
                    <div> {this.state.price} </div>
                 
                    <button  onClick={this.addToCart} >ADD TO CART</button>
        </div>)
        
    }return (<div>Loading...</div>)
}
}

let MapStateToProps= function(store){
    return{
        // itemId: store.itemId,
        username: store.username
       
    }
}
let ConnectedItemDetails = connect(MapStateToProps)(ItemDetails)
export default ConnectedItemDetails


