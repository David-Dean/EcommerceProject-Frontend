import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemDetails extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        
    }
}

let ConnectedItemDetails = connect()(ItemDetails)
export default ConnectedItemDetails


