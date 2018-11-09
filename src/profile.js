import React, {Component} from 'react';
import {connect} from 'react-redux';




class Profile extends Component{
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
        return( <div>
            <div>Seller Information</div>
            <div>{this.props.username}</div>
            <div>  {this.displayListings} </div>


            </div>
        )

    }
}
let ConnectedProfile = connect(function(store){
    return{
        username:store.username
    }
})(Profile)
export default ConnectedProfile