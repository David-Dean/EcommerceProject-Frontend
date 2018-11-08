import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from "./items.js"
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
        body: JSON.stringify({category: this.props.categoryType})
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
                    return (<Item
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        source={'/images/africanMask.jpg'}
                        itemId={item.itemId} />)
                })}
    </div>)
    }


}

let ConnectedCategory = connect()(Category)
export default ConnectedCategory