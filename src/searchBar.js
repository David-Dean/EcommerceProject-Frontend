import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Link} from  'react-router-dom'
import './App.css';



class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            searchInput:""
        }
        this.handleSearchChange=this.handleSearchChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit(event){
        event.preventDefault();
        let search = this.state.searchInput;
        let body = {query:search}
        fetch('/search', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        }).then(x=>x.text()
        ).then(response=>{
            let parsed = JSON.parse(response)
            console.log(parsed)
            this.props.dispatch({type: 'putSearchResults', res: parsed})
            this.props.history.push('/searchResults')
        })
    }

    handleSearchChange(event){
        this.setState({searchInput:event.target.value})

    }

    render(){
        return(<form onSubmit={this.onSubmit} className='searchContainer'>
                <input className='searchBar' placeholder='Search' type='text' value={this.state.searchInput}  onChange={this.handleSearchChange}/>
                <div className='searchSubmitO'>
                <input className='searchSubmit' id='submit' type='submit'/>
                </div>
            </form>)
}
}
let ConnectedSearchBar = connect()(SearchBar)
export default withRouter(ConnectedSearchBar)