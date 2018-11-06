import React, {Component} from 'react';
import {connect} from 'react-redux';

class Authentication extends Component{
    constructor(){
        super();
        this.state= {
            status: undefined,
            usernameInput : '',
            passwordInput : ''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }

    handleSignupSubmit(event){
        event.preventDefault();
        let body = JSON.stringify({
            username: this.state.usernameInput,
            password: this.state.passwordInput
        })
        
        fetch('/signup', {
            method:"POST",
            body:body
        }).then(x=> x.text())
        .then(resBody=> {
            let parsedResponse = JSON.parse(resBody)
            if (!parsedResponse.success){
                //change this to show up next to InputBox
                alert("Username Already Taken")
            }
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
            body:body
        }).then(x=> x.text())
        .then(resBody=> {
            let parsedResponse = JSON.parse(resBody)
            if (!parsedResponse.success){
                //change this to show up next to InputBoxs
                alert("Username or Password are Incorrect")
            }
            // render to HomePage
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
            return(<div className='Signup'><form onSubmit={this.handleSignupSubmit}>
                    Username
                    <input type='text' onChange={this.handleUsernameChange}/>
                    Password
                    <input type='text' onChange={this.handlePasswordChange}/>
                    Email
                    <input type='text'/>
                    <input type="submit"/>
                </form>
                <input type='button' onClick={this.handleLoginOption}>Already Signed Up?</input>
                </div>)
        } 
        return (<div className='Login'>
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


ConnectedAuthentication = connect()(Authentication)
export default ConnectedAuthentication