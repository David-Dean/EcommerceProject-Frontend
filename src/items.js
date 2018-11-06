import React, {Component} from'react';
import {connect} from 'react-redux'
import {Route, BrowserRouter, Link} from 'react-router-dom';

class Item extends Component{
    render(){
        return (<div className='item'>
                    <img height="100px" src={this.props.imageLocation}/>
                    <div>
                        <div>{this.props.description}</div>


                    </div>



        </div>)
    }
}

let ConnectedItems = connect()(Item)
export default ConnectedItems