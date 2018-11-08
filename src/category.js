import React, {Component} from 'react';
import {connect} from 'react-redux';

class Category extends Component{

    constructor(prop){
        super(prop);
        this.state={ 
            items : []
         }
    }

componentDidMount(){
    //fetch to /get all items and filter on front end
    // or new endpoint takes prop as part of body (in fetch) filter on backend
}

render(){
    return null
}


}

let ConnectedCategory = connect()(Category)
export default ConnectedCategory