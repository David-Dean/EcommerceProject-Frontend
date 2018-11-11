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
            return(<div className='seller-item-box'>
                <div className='.seller-item-info'>{item.title}</div>
                <div className='.seller-item-info'>{item.price}</div>
                <img className='item-image'  src={item.source}></img>
                
            </div>)
        })}</div>)

    }
    render(){
        if (!this.state.listings[0]){return (<div className='page'>Loading..</div>)}
        return( 
            <div className='user-info'>
                <div className='profile'>User Information</div>
                 <br/>
                <div className='profile' >{this.props.user}</div>
                <br/>
                <div>Items you're selling:</div>
                {this.displayListings()}
            </div>
            
            
        )
    }
}
let ConnectedProfile = connect()(Profile)
export default ConnectedProfile