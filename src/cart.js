import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component{
    constructor(){
        super();
        this.state={
            items:undefined
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
        let parsed=JSON.parse(response)
        this.setState({items: parsed})
    })
}
submit(event){
    event.preventDefault()
    //HERE GO TO PAYEMENT SYSTEM
}
remove(itemId){
    fetch('/removeFromCart', {
        method: "POST",
        body: JSON.stringify({itemId:itemId})
    }).then(x=>x.text())
    .then(response=>{
        let parsed=JSON.parse(response)
        alert("Item Removed from Cart")
    })
    //HERE FIX CONTENT OF DISPATCH

}
displayItemsInCart(){
    if (!this.state.items){return <div>Loading..</div>}
    else
    return (<div>{this.state.items.map((item) => {
        return (<div>
        <div>{item.source}</div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <button onClick={() => this.remove(item.itemId)}>Remove</button>
           </div> )
    })}</div>)
}

subTotal(){
    let sum= 0;
    for (var i=0; i<this.state.items.length; i++){
        sum=sum+this.state.items[i].price
    }
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

