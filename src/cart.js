import React, {Component} from 'react';
import {connect} from 'react-redux';
import StripeCheckout from './stripe.js';
import './App.css';


class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[],
           
        }
        this.subTotal=this.subTotal.bind(this)
        this.calcTaxes=this.calcTaxes.bind(this)
        this.calcTotal=this.calcTotal.bind(this)
        this.displayItemsInCart=this.displayItemsInCart.bind(this)
    }

componentDidMount(){
    console.log(this.props.username);
    fetch('/getCart', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({username: this.props.username})
    }).then(x=>{
        return x.text()})
    .then(response=>{
    
        let parsed=JSON.parse(response)
        console.log(parsed)
        this.setState({item: parsed})
    })
}
submit(event){
    event.preventDefault()
    //HERE GO TO PAYEMENT SYSTEM
}
remove(itemId){
    fetch('/removeFromCart', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({itemId:itemId, username: this.props.username})
    }).then(x=>x.text())
    .then(response=>{
        let parsed=JSON.parse(response)
        alert("Item Removed from Cart")
        fetch('/getCart', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username: this.props.username})
        }).then(x=>{
            return x.text()})
        .then(response=>{
        
            let parsed=JSON.parse(response)
            console.log(parsed)
            this.setState({item: parsed})
        })

    })

}
displayItemsInCart(){
    
    return (<div>{this.state.item.map((item) => {
        return (<div>
        <div>{}</div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <button onClick={() => {this.remove(item.itemID)}}>Remove</button>
           </div> )
    })}</div>)
}

subTotal(){
    let sum=0;
    for (var i=0; i<this.state.item.length; i++){
        sum=parseInt(sum)+parseInt(this.state.item[i].price)
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
    let total = parseInt(taxes) + parseInt(sum);
    return total
}

 render(){
        if (!this.state.item){return <div>Loading..</div>}
        else
        return( <div className='cart'>

                    <div  className='itemsDisplay'>
                        Items in Cart:
                        {this.displayItemsInCart()}
                    </div>

                    <div className='cartForm'>
                        <form onSubmit={this.submit}>
                            <div>Subtotal: ${this.subTotal()} </div>
                            <div>Taxes: ${this.calcTaxes()} </div>
                            <div>Total: ${this.calcTotal()} </div>
                            <StripeCheckout/>
                        </form>
                    </div>
                </div>)

    }
}



let ConnectedCart = connect()(Cart)
export default ConnectedCart

