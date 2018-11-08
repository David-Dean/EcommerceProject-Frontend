import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListItemsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            category: '',
            title: '',
            description: '',
            price: '',
            source: ''
        }
        this.handleTitleChange=this.handleTitleChange.bind(this)
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this)
        this.handlePriceChange=this.handlePriceChange.bind(this)
        this.onChange=this.onChange.bind(this)
    }
    submit(event){
        event.preventDefault()
    
        fetch('/addItem', {
            method: "POST",
            body: {
                category: this.state.category,
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                source: this.state.source
            }
        }).then(function (x){ 
            return x.text()
        })
        .then(response=> console.log(response))

    }
    onChange(event){
        this.setState({category: event.target.value})
    }
    /*HERE HAVE METHOD TO UPDATE CATEGORY*/

    handleTitleChange(event){
        this.setState({title:event.target.value})
    }
    handleDescriptionChange(event){
        this.setState({description:event.target.value})
    }
    handlePriceChange(event){
        this.setState({price:event.target.value})
    }
    /*HERE HAVE METHOD TO UPDATE PICTURE SOURCE*/

    render(){
        return (<div>
                    {/* <h1 className='titleOfListPage'>LIST NEW ITEM</h1> */}
                    <div className='list-items'>
                        <form onSubmit={this.submit}>
                         <div className='dropdown'>
                                What Category does your Item belong in?
                            <select onChange={this.onChange}>
                                <option value="" selected disabled hidden>Choose here</option>
                                <option value="masks">Masks</option>
                                <option value="statues">Statues</option>
                                <option value="vases">Vases</option>
                                <option value="fossils">Fossils</option>
                            </select>


                        </div>
                        <br/>
                        <div>
                            What is the Item Title: 
                            <input type='text' onChange={this.handleTitleChange}></input>
                        </div>
                        <br/>
                        <div>
                            Describe the Item:
                            <textarea type='text' cols='50' rows='4' onChange={this.handleDescriptionChange}></textarea>
                         </div>
                         <br/>
                         <div>
                            What is the Item Price:
                            <input type='text' onChange={this.handlePriceChange}></input>
                        </div>
                        <br/>
                        <div>
                            Upload a Picture of the Item
                            <button>UPLOAD</button>
                            {/*here find way to add pictures AND TO ADD THEM TO THE STATE*/}
                        </div>
                        <br/>
                        <input className='submitItem' type='submit' value="Ready to List Item!"></input>
                    </form>
        </div>
        </div>)
    }
}
let ConnectedListItemsPage = connect()(ListItemsPage)
export default ConnectedListItemsPage