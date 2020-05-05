import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/witherrorHandler';

const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    cheese:1.0,
    meat:2.0
}
class BurgerBuilder extends Component{

    state={
        ingredients:null,
        totalPrice:4,
        purchase:false,
        purchasing:false,
        loading: false,
        error:false
    }

    componentDidMount(){
        axios.get('https://burger-builder-b81e1.firebaseio.com/ingredients.json')
        .then(response=>this.setState({ingredients:response.data}))
        .catch(error=>this.setState({error:true}))
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
        //alert('You can continue');
        this.setState({loading:true})
        const orders={
            ingredients: this.state.ingredients,
            price : this.state.totalPrice.toFixed(2),
            customer:{
                name:'John Miller',
                phone:9878393223
            },
            email:'john.miller@gmail.com'

        }
        axios.post('/orders.json',orders)
           .then(resolve=>this.setState({loading:false,purchasing:false}))
           .catch(error=>this.setState({loading:false, purchasing: false}));
    }
    render(){

        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0;
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

       if(this.state.ingredients){
           burger=(<Aux>
             <Burger ingredients={this.state.ingredients}/>
              <BuildControls
              addedIngredients={this.addedIngredientsHandler} 
              removeIngredients={this.removeIngredientsHandler}
              disable={disabledInfo}
              purchase={this.state.purchase}
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}/>
           </Aux>);
           orderSummary=<OrderSummary ingredients={this.state.ingredients}
           purchaseCancelled={this.purchaseCancelHandler}
           purchaseContinue={this.purchaseContinueHandler}
           price={this.state.totalPrice}/>
       }
       
        if(this.state.loading){
            orderSummary=<Spinner/>
        }
      
        return(
            <Aux>
              <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 {orderSummary}
              </Modal> 
                 {burger}
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios);