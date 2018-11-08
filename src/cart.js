import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Comnponent{
    constructor(){
        super();
        this.state={
            items:[]
        }
    
    }
    render(){
        return( <div>
                  {this.state.items}


        </div>)

    }
}



let ConnectedCart = connect()(Cart)
export default ConnectedCart

