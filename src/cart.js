import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Comnponent{
    constructor(){
        super();
        this.state={
            items:[]
        }
    
    }
submit(event){
    event.preventDefault()
}
displayItems(items){
    return(<div></div>)

}
subTotal(){
    let sum = item.price
    return sum
}
calcTaxes(){
   let sum=this.subTotal();
   let taxes = 0.15*sum;
   return taxes
}
calcTotal(){
    let sum = subTotal();
    let taxes = calcTaxes();
    let total = taxes + sum;
    return total
}

    render(){
        return( <div>
                    <form onSubmit={this.submit}>
                        {this.displayItems}

                        <input type='submit' value='Checkout Now'/>
                    </form>
                </div>)

    }
}



let ConnectedCart = connect()(Cart)
export default ConnectedCart

