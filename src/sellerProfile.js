import React, {Component} from 'react';
import {connect} from 'react-redux';

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
            body: JSON.stringify({username: this.props.seller})
        }).then((x)=>x.text())
        .then((response)=>{
        let parsed=JSON.parse(response)
        this.setState({listings: parsed})

    })}
   
    displayListings(){
        return(<div>{this.state.listings.map((item)=> {
            return(<div>
                <div>{item.source}</div>
                <div>{item.title}</div>
                <div>{item.price}</div>
            </div>)
        })}</div>)

    }
    render(){
        if (!this.state.listings[0]){return (<div>Loading..</div>)}
        return( <div>
                    <div>Seller Information</div>
                    <div>{this.state.listings[0].username}</div>
                    <div>  {this.displayListings()} </div>
                </div>
        )

    }
}
let ConnectedProfile = connect()(SellerProfile)
export default ConnectedProfile