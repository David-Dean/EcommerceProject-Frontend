import React, {Component} from 'react';
import {connect} from 'react-redux';



class Profile extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return( <div>
            <div>{this.props.username}</div>

            
            </div>
        )

    }
}
let ConnectedProfile = connect(function(store){
    return{
        username:store.username
    }
})(Profile)
export default ConnectedProfile