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
        let callback =function(response){
            let parsed=JSON.parse(response)
            this.setState({listings: parsed})
        }
        callback=callback.bind(this)
        fetch('/getUsersListings', {
            method: "POST",
            body: JSON.stringify({username: this.props.user})
        }).then((x)=>x.text())
        .then(callback)
    }
   
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
        return( <div>
            <div>User Information</div>
            <div>{this.props.user}</div>
            <div>  {this.displayListings()} </div>
            </div>
        )
    }
}
let ConnectedSellerProfile = connect()(SellerProfile)
export default ConnectedSellerProfile