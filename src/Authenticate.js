import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';


class Authentication extends Component{
    constructor(){
        super();
        this.state= {
            status: undefined,
            usernameInput : '',
            passwordInput : ''
        }
        this.handleSignupSubmit=this.handleSignupSubmit.bind(this)
        this.handleLoginSubmit=this.handleLoginSubmit.bind(this)
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleLoginOption=this.handleLoginOption.bind(this)
    }

    handleSignupSubmit(event){
        event.preventDefault();
        let body = JSON.stringify({
            username: this.state.usernameInput,
            password: this.state.passwordInput
        })
        
        fetch('/signup', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:body
        }).then(x=> x.text())
        .then(resBody=> {
            let parsedResponse = JSON.parse(resBody)
            if (!parsedResponse.success){
                //change this to show up next to InputBox
                alert("Username Already Taken")
            }else 
            this.props.dispatch({type:'loggedIn', username: this.state.usernameInput})
            // render to HomePage
        })
    }
    handleLoginSubmit(event){
        event.preventDefault();
        let body = JSON.stringify({
            username: this.state.usernameInput,
            password: this.state.passwordInput
        })
        
        fetch('/login', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:body
        }).then(x=> x.text())
        .then(resBody=> {
            let parsedResponse = JSON.parse(resBody)
            if (!parsedResponse.success){
                //change this to show up next to InputBoxs
                alert("Incorrect username or password")
            }else 
            this.props.dispatch({type:'loggedIn', username: this.state.usernameInput})
        })
        
        
    }
    handleUsernameChange(event){
        this.setState({
            usernameInput : event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            passwordInput : event.target.value
        })
    }
    handleLoginOption(event){
        this.setState({status: "signed up"})
    }

    render(){
        if (this.state.status!=="signed up"){
            return(<div className='Signup'>
                        <img src='/images/logo.png' />
                        <form onSubmit={this.handleSignupSubmit}>
                            Username
                            <input type='text' onChange={this.handleUsernameChange}/>
                            Password
                            <input type='text' onChange={this.handlePasswordChange}/>
                               Email
                            <input type='text'/>
                            <input type="submit"/>
                        </form>
                    <button onClick={this.handleLoginOption}>Already Signed Up?</button>
                </div>)
        } 
        return (<div className='Login'>
                        <img src='/images/logo.png' />
                        <form onSubmit={this.handleLoginSubmit}>
                            Username
                            <input type='text' onChange={this.handleUsernameChange}/>
                            Password
                            <input type='text' onChange={this.handlePasswordChange}/>
                            <input type="submit"/>
                         </form>
                     </div>)
    
    }
}


let ConnectedAuthentication = connect()(Authentication)
export default ConnectedAuthentication