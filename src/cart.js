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
submit(event){
    event.preventDefault()
}
displayItems(items){
    return(<div></div>)

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
                    <form onSubmit={this.submit}>
                        {this.displayItems}

                        <input type='submit' value='Checkout Now'/>
                    </form>
                </div>)

    }
}



let ConnectedCart = connect()(Cart)
export default ConnectedCart

