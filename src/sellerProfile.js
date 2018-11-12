import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Link} from 'react-router-dom'


class SellerProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            listings:[]
        }
    }

    componentDidMount(){
        fetch('/getUsersListings', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username: this.props.seller})
        }).then((x)=>x.text())
        .then((response)=>{
        let parsed=JSON.parse(response)
        this.setState({listings: parsed})

    })}
   
    displayListings(){
        return(<div className='seller-items'>{this.state.listings.map((item)=> {
            return(<div className='seller-item-box'>
                
                <div className="seller-item-info">{item.title}</div>
                <div className="seller-item-info">${item.price}</div>
                <img height="200px"  src={item.source} ></img>
            </div>)
        })}</div>)

    }
    render(){
        if (!this.state.listings[0]){return (<div>Loading..</div>)}
        return( <div className='seller-profile'>
                    <div > Information</div>
                    <br/>
                    <div >Name of Seller: {this.state.listings[0].username}</div>
                    <br/>
                    <div > Items Listed:</div>
                    <div> {this.displayListings()} </div>
                </div>
        )

    }
}
let ConnectedSellerProfile = connect()(SellerProfile)
export default ConnectedSellerProfile