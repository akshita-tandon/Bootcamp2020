import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

  componentDidUpdate(){
    console.log("[Order summary] will update");
  }
  render(){
    const ordersummary=Object.keys(this.props.ingredients)
    .map((igKey)=>{
        return <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey} : {this.props.ingredients[igKey]}
         </span>
        </li>
    });
    return (
        <Aux>
          <h3>Your Order:</h3>
          <p>Here's your burger with following ingredients:</p>
          <ul>
            {ordersummary}
          </ul>
          <p><strong>The total price : {this.props.price.toFixed(2)}</strong> </p>
         <p>Continue to Checkout?</p>
         <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
         <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
        </Aux>
    )
  }
}

export default OrderSummary;