import React, {Component} from 'react';
import {connect} from 'react-redux';


class TopComponent extends Component{
    constructor(){
        super();
        this.state={
            searchInput:""
        }
        // this.onSubmit=this.onSubmit.bind(this)
        this.handleSearchChange=this.handleSearchChange.bind(this)
    }

    // onSubmit(event){
    //     event.preventDefault();
    //     let search = this.state.searchInput;
    //     fetch('/getSearchedItems', {
    //         method: "POST",
    //         body: JSON.stringify(search)
    //     }).then(x=>x.text()
    //     ).then(response=>{
    //         let parsedResponse = JSON.parse(response)
    //     }).catch
    // }

    handleSearchChange(event){
        this.setState({searchInput:event.target.value})

    }

    render(){
        return (<div>
            <p>Search for Items</p>
            <form onSubmit={this.onSubmit}>
                <input className='searchBar' type='text' value={this.state.searchInput} onChange={this.handleSearchChange}/>
                <input className='searchSubmit' type='submit'/>
            </form>
        </div>
        )
    }
}

let ConnectedTopComponent = connect()(TopComponent)
export default ConnectedTopComponent