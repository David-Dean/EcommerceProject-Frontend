import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemDetails extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return (<div>

                    <img></img>
                    <div> TITLE </div>
                    <div> DESCRIPTION</div>
                    <div> PRICE </div>
                    




        </div>)
        
    }
}

let ConnectedItemDetails = connect()(ItemDetails)
export default ConnectedItemDetails

