import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import SearchBar from './searchBar.js'
import './App.css';



class TopComponent extends Component{
    

    render(){
        return (<div className='top-container-all' >
        
                     <div className="top-container-left">
                        <Link to='/'><img height="35px" src='/images/logo.png'/> </Link>
                    </div>
                    <div className='search'><SearchBar/></div>
                    <div className='top-container-right'>
                        <Link to={'/profile/'+this.props.username}> <button height="35px">MY PROFILE</button> </Link>
                        <Link to={'/cart/'+this.props.username}> <button height="35px" >MY CART</button> </Link>
                         <Link to='/listItem'><button height='35px'>LIST ITEM</button></Link>
                    </div>
                </div>
    
        )
    }
}

let ConnectedTopComponent = connect((store) => {
    return {
        username : store.username
   }
})(TopComponent)
export default ConnectedTopComponent