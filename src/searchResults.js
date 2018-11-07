import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'



class SearchResults extends Component{
   

    render(){
        if(this.props.results===undefined){return(<div></div>)}
    
        let displayResults = function(item){
            return (<div>
                <div>item.title</div>
                <div>item.image</div>
            </div>)

        }
        return(<div>
            {this.props.searchResults.map(displayResults)}
        </div>)
}
}
let ConnectedSearchResults = connect(function(store){
   return {searchResults: store.searchResults}
})(SearchResults)
export default ConnectedSearchResults