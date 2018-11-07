import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


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
            body: JSON.stringify(body)
        }).then(x=>x.text()
        ).then(response=>{
            let parsed = JSON.parse(response)
            this.props.dispatch({type: 'putSearchResults', res: parsed})
        })
    }

    handleSearchChange(event){
        this.setState({searchInput:event.target.value})

    }

    render(){
        return(<form onSubmit={this.onSubmit}>
                <input className='searchBar' placeholder='Search' type='text' value={this.state.searchInput}  onChange={this.handleSearchChange}/>
                <input className='searchSubmit' type='submit'/>
            </form>)
}
}
let ConnectedSearchBar = connect()(SearchBar)
export default ConnectedSearchBar