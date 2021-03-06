import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './App.css';


class App extends Component{
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_CuOhEKUY2UlbwUf3tXYMQA6E"
      />
    )
  }

}
export default App

