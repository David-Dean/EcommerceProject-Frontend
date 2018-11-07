import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Authentication from './Authenticate'
import TopComponent from './topComponent.js'
import HomePage from './HomePage.js'
import Item from './items.js'

import './App.css';

let items=[
  { category: 'Mask',
    title: 'Greek Mask',
    description: "2nd century Mask of Dionosus",
    price: '3000',
    source: '/images/greekMask1.jpg', 
    itemId: '11'
  }, { 
    category: 'Mask',
  title: 'Roman Mask',
  description: "early 6th century Mask of Plato",
  price: '2000',
  source: '/images/greekMask2.jpg', 
  itemId: '12'
},{
   category: 'Mask',
title: 'Bhuddist Mask',
description: "11th century wodden mask from Japan",
price: '5000',
source: '/images/bhuddistMask.jpg', 
itemId: '13'
},{ 
  category: 'Mask',
title: 'African Mask',
description: "Iron-Wood 8th Century Ceremonial Mask from Camaroon",
price: '10000',
source: '/images/africanMask.jpg', 
itemId: '14'
},{
   category: 'Statue',
title: 'Chinese Statue',
description: "Beautiful bronze Ming Dynasty Statue",
price: '9000',
source: '/images/ChineseStatue.jpg', 
itemId: '15'
},{
   category: 'Statue',
title: 'Roman Statue',
description: "Late Empire Period Bronze Statue",
price: '10000',
source: '/images/bronzeRoman.jpg', 
itemId: '16'
},{
   category: 'Statue',
title: 'Greek Decorative Statue',
description: "Reproduction of Orignial, c. 1928",
price: '600',
source: '/images/romanStatue.jpg', 
itemId: '17'
},{ 
  category: 'Fossil',
title: 'Ground Sloth',
description: "skeleton of giant ground sloth, found in Jamaica, c.1967",
price: '20000',
source: '/images/groundSloth.jpg', 
itemId: '18'
},{ 
  category: 'Fossil',
title: 'dodo',
description: "skeleton of last living Dodo bird, found in England, c.1887",
price: '13000',
source: '/images/dodo.jpg', 
itemId: '19'
},{ 
  category: 'Fossil',
title: 'Mammoth',
description: "skeleton of young mammoth, found in Siberia, c.2010",
price: '45000',
source: '/images/mammoth.jpg', 
itemId: '20'
},{ 
  category: 'Fossil',
title: 'Dire Wolf',
description: "skeleton of Dire Wolf, found in Scotland, c.1936",
price: '7600',
source: '/images/greekMask1.jpg', 
itemId: '21'
}]

let searchReturnItems=[]

class App extends Component {
  constructor(){
    super();
    this.state={
      items: items
    }
    this.renderAllItems=this.renderAllItems.bind(this)
  }

  renderAllItems(){
    return this.state.items.map(item=>
      (<Item
          category={item.category}
          title={item.title}
          description={item.description}
          price={item.price}
          source={item.source}
          itemId={item.itemId} />))
  }
  renderSearchResults(){
    return searchReturnItems.map(item=>
      (<Item
        category={item.category}
        title={item.title}
        description={item.description}
        price={item.price}
        source={item.source}
        itemId={item.itemId} />))
  
           }
  renderProfile(){
    return (<div>Profile</div>)
  }
  renderCart(){
    return (<div>Cart</div>)
  }
  renderListItem(){
    return(<div>LIST ITEM HERE</div>)
  }
    render() {

      if(!this.props.username){
        return (<BrowserRouter>
                  <div className="App">
                     <Authentication/>
                    </div>
                </BrowserRouter>
        );
    }else
    return (  <BrowserRouter>
                <div style={{width:'100%'}}>
                   
                    <HomePage/>
                    <Route exact path='/' render={this.renderAllItems} />
                    <Route exact path='/profile' render={this.renderProfile} />
                    <Route exact path='/cart' render={this.renderCart} />
                    <Route exact path='/listItem' render={this.renderListItem}/>
                    <Route exact path='/searchResults' render={this.renderSearchResults} />
                 </div>
             </BrowserRouter>)

  
  }
}


let mapStateToProps= function(state){
 return {
   username: state.username
 }
}
let ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp;
