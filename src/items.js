import React, {Component} from'react';
import {connect} from 'react-redux'
import {Route, BrowserRouter, Link} from 'react-router-dom';

class Item extends Component{
    constructor(){
        super();
        this.state={}
        this.imageClick=this.imageClick.bind(this)
    }

    imageClick(){
       return null //HERE LINIKS TO IMAGE_DESCRIPTION PAGE
    }
    render(){
        return (<div className='item'>
                    <div>{this.props.title}</div>
                     <div>{'$'+this.props.price}</div>
                    <img height="100px" src={this.props.source} onClick={this.imageClick}><Link to='/itemDescription/:item'>Homepage</Link></img>
                    </div>)
                    
    }
}

let ConnectedItems = connect()(Item)
export default ConnectedItems