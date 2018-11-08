import React, {Component} from 'react';
import {connect} from 'react-redux';

class Category extends Component{

    constructor(prop){
        super(prop);
        this.state={ 
            items : [],
         }
    }

componentDidMount(){
    fetch('/getItemsByCategory', {
        method: 'POST',
        body: JSON.stringify(this.props.categoryType)
    }).then(x=>x.text()
    ).then(function(response){
       let parsed=JSON.parse(response)
       this.setState({items: parsed})
    }.bind(this))
    // or new endpoint takes prop as part of body (in fetch) filter on backend
}

render(){
    
    return (<div>
                {this.state.items.map(function(item){
                    return (<div>{item}</div>)
                })}
    </div>)
    }


}

let ConnectedCategory = connect()(Category)
export default ConnectedCategory