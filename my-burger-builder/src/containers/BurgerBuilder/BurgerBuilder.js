import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    cheese:1.0,
    meat:2.0
}
class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchase:false,
        purchasing:false
    }

    updatePurcahseState=(ingredients)=>{
       const sum=Object.keys(ingredients)
       .map((igKey)=>{
           return ingredients[igKey];
       }).reduce((sum,el)=>{return sum+el},0);
       this.setState({purchase:sum > 0});
    }
    addedIngredientsHandler=(type)=>{
       const oldCount=this.state.ingredients[type] ;
       const updatedCount=oldCount+1;
       const updatedIngredients={
           ...this.state.ingredients
       }
       updatedIngredients[type]=updatedCount;
       const priceAddition=INGREDIENT_PRICES[type];
       const oldPrice=this.state.totalPrice;
       const updatedPrice= oldPrice + priceAddition;
       this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
       this.updatePurcahseState(updatedIngredients);

    }

    removeIngredientsHandler=(type)=>{
       const oldCount=this.state.ingredients[type] ;
       if(oldCount<=0){
           return ;
       }
       const updatedCount=oldCount-1;
       const updatedIngredients={
           ...this.state.ingredients
       }
       updatedIngredients[type]=updatedCount;
       const priceAddition=INGREDIENT_PRICES[type];
       const oldPrice=this.state.totalPrice;
       const updatedPrice= oldPrice - priceAddition;
       this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
       this.updatePurcahseState(updatedIngredients);

    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        alert('You can continue');
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0;
        }
        return(
            <Aux>
              <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 <OrderSummary ingredients={this.state.ingredients}
                 purchaseCancelled={this.purchaseCancelHandler}
                 purchaseContinue={this.purchaseContinueHandler}
                 price={this.state.totalPrice}/>
              </Modal> 
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls
              addedIngredients={this.addedIngredientsHandler} 
              removeIngredients={this.removeIngredientsHandler}
              disable={disabledInfo}
              purchase={this.state.purchase}
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}/>
            </Aux>
        )
    }
}
export default BurgerBuilder;