import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListItemsPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
                    <form>
                        <div className='dropdown'>
                            <button className="dropdown-button">
                                Which Category is your Item?
                                <i className='downzo'/>
                            </button>
                            <div className='dropdown-content'>
                                <a href='#'>MASKS</a>
                                <a href='#'>STATUES</a>
                                <a href='#'>VASES</a>
                                <a href='#'>FOSSILS</a>
                            </div>
                        </div>
                        <div>
                            What is the Item Title
                            <input type='text'></input>
                        </div>
                        <div>
                            Describe the Item 
                            <textarea type='text' cols='50' rows='4'></textarea>
                         </div>
                         <div>
                            What is the Item Price
                            <input type='text'></input>
                        </div>
                        <div>
                            Upload a Picture of the Item
                            <button>UPLOAD</button>
                            {/*here find way to add pictures*/}
                        </div>
                    </form>
        </div>)
    }
}
let ConnectedListItemsPage = connect()(ListItemsPage)
export default ConnectedListItemsPage