import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';





class Profile extends Component{
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
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username: this.props.user})
        }).then((x)=>x.text())
        .then(callback)
    }
   
    displayListings(){
        
        return(<div className='profile'>{this.state.listings.map((item)=> {
            return(<div>
                {/* <div>{item.source}</div> */}
                <div>{item.title}</div>
                <div>{item.price}</div>
            </div>)
        })}</div>)

    }
    render(){
        if (!this.state.listings[0]){return (<div>Loading..</div>)}
        return( <div className='profile'>
            <div>User Information</div>
            <br/>
            <div>{this.props.user}</div>
            <div>  {this.displayListings()} </div>
            </div>
        )
    }
}
let ConnectedProfile = connect()(Profile)
export default ConnectedProfile