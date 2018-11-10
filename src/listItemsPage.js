import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class ListItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            title: '',
            description: '',
            price: '',
            source: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
    }
    submit(event) {
        event.preventDefault()
        let callback = function (response) {
            let parsed = JSON.parse(response)
            console.log(parsed)
            if(parsed.success){
                alert("Item Added")
                fetch('/getAllItems',{ 
                    headers: {
                        'Content-Type': 'application/json'
                      }
                })
                .then(x=>x.text())
                .then(responseBody=>{
                    let parsed=JSON.parse(responseBody);
                    this.props.dispatch({type:"getAllItems", items: parsed})
                    
                })
        }
     }
     callback=callback.bind(this)
      
        fetch('/addItem', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            credentials: "same-origin",
            body: JSON.stringify({
                category: this.state.category,
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                source: this.state.source
            })
        }).then(function (x) {
            return x.text()
        }).then(callback)

        fetch('/profile', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({image: this.state.file})
        }).then(function (x){
            return x.text()
        }).then()
    }
    onChange(event) {
        this.setState({ category: event.target.value })
    }
    /*HERE HAVE METHOD TO UPDATE CATEGORY*/

    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }
    handleDescriptionChange(event) {
        this.setState({ description: event.target.value })
    }
    handlePriceChange(event) {
        this.setState({ price: event.target.value })
    }
    handleFileChange(event) {
        this.setState({ file: event.target.files[0] })
       
    }

    render() {
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
                    <br />
                    <div>
                       Title:
                            <input type='text' onChange={this.handleTitleChange}></input>
                    </div>
                    <br />
                    <div>
                        Description:
                            <textarea type='text' cols='50' rows='4' onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <br />
                    <div>
                        Price:
                            <input type='text' onChange={this.handlePriceChange}></input>
                    </div>
                    <br />
                    <div>
                        Upload a Picture
                            <input type='file' onChange={this.handleFileChange}/>
                    </div>
                    <br />
                    <input className='submitItem' type='submit' value="Ready to List Item!"></input>
                </form>
            </div>
        </div>)
    }
}
let ConnectedListItemsPage = connect()(ListItemsPage)
export default ConnectedListItemsPage