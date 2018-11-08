import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
import App from './App';

let reducer= function(state, action){
    if(action.type === 'loggedIn'){
        return({...state, username: action.username })
    }
    if(action.type === 'getAllItems'){
        return({...state, items: action.items})
    }
    if (action.type === 'putSearchResults'){
        
        return {...state, searchResults:action.res}
    }
    return {...state}
}
const store = createStore(
    reducer,
    {   
        items: [],
        searchResults: [] 
    },

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let contents = (<Provider store={store}>
                    <App/>
                </Provider>)

ReactDOM.render(contents, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

