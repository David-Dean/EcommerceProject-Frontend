import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            status: undefined,
            usernameInput: '',
            passwordInput: ''
        }
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLoginOption = this.handleLoginOption.bind(this)
    }

    handleSignupSubmit(event) {
        event.preventDefault();
        let body = JSON.stringify({
            username: this.state.usernameInput,
            password: this.state.passwordInput
        })

        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then(x => x.text())
            .then(resBody => {
                let parsedResponse = JSON.parse(resBody)
                if (!parsedResponse.success) {
                    //change this to show up next to InputBox
                    alert("Username Already Taken")
                } else
                    this.props.dispatch({ type: 'loggedIn', username: this.state.usernameInput })
                // render to HomePage
            })
    }
    handleLoginSubmit(event) {
        event.preventDefault();
        let body = JSON.stringify({
            username: this.state.usernameInput,
            password: this.state.passwordInput
        })

        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then(x => x.text())
            .then(resBody => {
                let parsedResponse = JSON.parse(resBody)
                if (!parsedResponse.success) {
                    //change this to show up next to InputBoxs
                    alert("Incorrect username or password")
                } else
                    this.props.dispatch({ type: 'loggedIn', username: this.state.usernameInput })
            })


    }
    handleUsernameChange(event) {
        this.setState({
            usernameInput: event.target.value
        })
    }
    handlePasswordChange(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }
    handleLoginOption(event) {
        this.setState({ status: "signed up" })
    }

    render() {
        if (this.state.status !== "signed up") {
            return (<div className='Signup'>
            
                <img className='main-logo' alt='logo' src='/images/logo.png' />
                <div className='form'>
                <form onSubmit={this.handleSignupSubmit} className='register'>
                    <div></div>
                    <input placeholder='Username' className='input' type='text' onChange={this.handleUsernameChange} />
                    <div></div>
                    <input placeholder='Password' type='password' className='input' onChange={this.handlePasswordChange} />
                    <div></div>
                    <input placeholder='Email' type='text' className='input' />
                    <div>
                    <input type="submit" className='signup-button' />
                    </div>
                </form>
                <button className='login-button'onClick={this.handleLoginOption}>Already Signed Up?</button>
                </div>
            </div>)
        }
        return (<div className='Login'>
            <img className='main-logo' alt='logo' src='/images/logo.png' />
            <div className='form'>
            <form onSubmit={this.handleLoginSubmit}>
                {/* <div>Username</div> */}
                <input placeholder='Username' type='text' className='input' onChange={this.handleUsernameChange} />
                {/* <div>Password</div> */}
                <input placeholder='Password' type='text' className='input' onChange={this.handlePasswordChange} />
                <input type="submit" className='login-button'/>
            </form>
            </div>
        </div>)

    }
}


let ConnectedAuthentication = connect()(Authentication)
export default ConnectedAuthentication