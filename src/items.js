import React, {Component} from'react';
import {connect} from 'react-redux'
import {Route, BrowserRouter, Link} from 'react-router-dom';

class Item extends Component{
    constructor(){
        super();
        this.state={}
        
    }

    
    render(){
        return (<div className='item'>
                    <div>{this.props.title}</div>
                     <div>{'$'+this.props.price}</div>
                     <Link to={`/itemDescription/${this.props.itemId}`}><img height="100px" src={this.props.source} ></img></Link>
                    </div>)
                    
    }
}

let ConnectedItems = connect()(Item)
export default ConnectedItems