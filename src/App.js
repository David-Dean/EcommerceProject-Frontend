import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Authentication from './Authenticate'
import TopComponent from './topComponent.js'
import HomePage from './HomePage.js'
import Item from './items.js'
import SideMenu from './sideMenu.js'
import ListItemsPage from './listItemsPage.js'
import Category from './category.js'
import ItemDetails from './itemDetails.js'
import Cart from './cart.js'
import Profile from './profile.js'

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      items: [] //want this to be from db
    }
    this.renderAllItems=this.renderAllItems.bind(this)
    this.renderSearchResults=this.renderSearchResults.bind(this)
  }

  renderAllItems(){
    return this.props.items.map(item=>
      (<Item
          category={item.category}
          title={item.title}
          description={item.description}
          price={item.price}
          source={'/images/africanMask.jpg'}
          itemId={item.itemID} />))
  }
  renderSearchResults(){
    return this.props.searchResults.map(item=>
      (<Item
        category={item.category}
        title={item.title}
        description={item.description}
        price={item.price}
        source={'/images/africanMask.jpg'}
        itemId={item.itemID} />))
  
           }
          
  renderCategory(router){
    let category = router.match.params.category;
    return (<Category categoryType={category} />)
  }
  renderDescription(router){
    let itemId = router.match.params.itemId
    return (<ItemDetails itemId={itemId}></ItemDetails>)
  }
  renderProfile(){
    return (<div><Profile username={this.props.username}></Profile></div>)
  }
  renderCart(){
    return (<Cart></Cart>)
  }
  renderListItem(){
    return(<div><ListItemsPage/></div>)
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
                   <div className='homepage'>
                    <HomePage/>
                    <div className='main-container'>
                      <SideMenu />
                      <div className='items-container'>
                       <Route exact path='/' render={this.renderAllItems} />
                       <Route exact path='/searchResults' render={this.renderSearchResults} />
                       <Route exact path='/categories/:category' render={this.renderCategory} />
                       <Route exact path='/itemDescription/:itemId' render={this.renderDescription} />
                       </div>
                      </div>
                    </div>
                    <Route exact path='/profile' render={this.renderProfile} />
                    <Route exact path='/cart' render={this.renderCart} />
                    <Route exact path='/listItem' render={this.renderListItem}/>
                    
                 </div>
             </BrowserRouter>)

 
  }
}


let mapStateToProps= function(state){
 return {
   items: state.items,
   username: state.username,
   searchResults: state.searchResults
 }
}
let ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp;
