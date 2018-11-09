import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component{
    constructor(){
        super();
        this.state={
            items:[]
        }
        this.subTotal=this.subTotal.bind(this)
        this.calcTaxes=this.calcTaxes.bind(this)
        this.calcTotal=this.calcTotal.bind(this)
    
    }

componentDidMount(){
    fetch('/getCart', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: this.props.username
    }).then(x=>x.text())
    .then(response=>{
        return 
    })
}
submit(event){
    event.preventDefault()
}
remove(){
    this.dispatch({type:'removeFromCart', content: this.state.usernameInput})

}
displayItemsInCart(){
    return (<div>{this.props.cart.map((item) => {
        return (<div>
        <div>{item.source}</div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <button onClick={this.remove}>Remove</button>
           </div> )
    })}</div>)
}

subTotal(){
    let sum= 0;
    for (var i=0; i<this.state.items.length; i++){
        sum=sum+this.state.items[i].price
    }
     //HERE NEED TO ADD DIFFERENT ITEMS PRICES
    return sum
}
calcTaxes(){
   let sum=this.subTotal();
   let taxes = 0.15*sum;
   return taxes
}
calcTotal(){
    let sum = this.subTotal();
    let taxes = this.calcTaxes();
    let total = taxes + sum;
    return total
}

    render(){
        return( <div>

                    <form>
                    {this.displayItemsinCart}
                    </form>

                    <form onSubmit={this.submit}>
                        
                        <div>Subtotal: {this.subTotal()} </div>
                        <div>Taxes: {this.calcTaxes()} </div>
                        <div>Total: {this.calcTotal()} </div>

                        <input type='submit' value='Checkout Now'/>
                    </form>
                </div>)

    }
}



let ConnectedCart = connect(function(store){
    return{
        username:store.username,
        cart: store.cart
    }
})(Cart)
export default ConnectedCart

