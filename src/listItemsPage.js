import React, {Component} from 'react';
import {connect} from 'react-redux';



class ListItem extends Component{
    constructor(props){
        super(props);
    
    }



    render(){
        return (<div>
                    <form>
                        Category
                        <input type='text'></input>
                        Item Title
                        <input type='text'></input>
                        Item Desciption
                        <textarea type='text' cols='50' rows='4'></textarea>
                        Item Price
                        <input type='text'></input>




                    </form>


        </div>)


    }
}