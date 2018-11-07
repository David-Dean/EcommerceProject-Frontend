import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import SearchBar from './searchBar.js'


class TopComponent extends Component{
    

    render(){
        return (<div style={{display:'flex', width: '100%'}}>
           <Link to='/'><img height="35px" src='/images/logo.png'/> </Link>
            <SearchBar/>
           <Link to='/profile'> <button height="35px">MY PROFILE</button> </Link>
           <Link to='/cart'> <button height="35px" >MY CART</button> </Link>
            <Link to='/listItem'><button height='35px'>LIST ITEM</button></Link>
    </div>
        )
    }
}

let ConnectedTopComponent = connect()(TopComponent)
export default ConnectedTopComponent