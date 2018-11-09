import React, {Component} from 'react';
import {connect} from 'react-redux';
import {  Link } from 'react-router-dom'


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
         
            if (parsed.success){alert('Item Added')}
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
            itemId:parsed.itemID,
            soldBy: parsed.username, 
            // source: parsed.source
        })
        }.bind(this))
    }
    render(){
        if(this.state.title){
        return (<div>
                    {/* <img src={this.state.source} onClick=ZOOM ></img> */}
                    <br/>
                    <div> {this.state.title} </div>
                    <br/>
                    <div> Item Information: {this.state.description}</div>
                    <br/>
                    <div> Price: {this.state.price} $ </div>
                    <br/>
                    <div>Sold by: <Link to={`/sellerProfile/${this.state.soldBy}`}>{this.state.soldBy}</Link></div>
                    <button  onClick={this.addToCart} >ADD TO CART</button>
        </div>)      
    }return (<div>Loading...</div>)
}}

let MapStateToProps= function(store){
    return{
        // itemId: store.itemId,
        username: store.username
       
    }
}
let ConnectedItemDetails = connect(MapStateToProps)(ItemDetails)
export default ConnectedItemDetails


