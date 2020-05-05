import React from 'react';
import burgerStyle from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient=(props)=>{
    
  let ingredients=null;
    switch(props.type){

      case('bread-bottom'):
      ingredients=<div className={burgerStyle.BreadBottom}></div> ;
      break;
      case('bread-top'):
      ingredients=(
          <div className={burgerStyle.BreadTop}>
               <div className={burgerStyle.Seeds1}></div>
              <div className={burgerStyle.Seeds2}></div>
          </div>  
      );
      break;
      case('meat'):
      ingredients=<div className={burgerStyle.Meat}></div>;
      break;
      case('cheese'):
      ingredients=<div className={burgerStyle.Cheese}></div>;
      break;
      case('salad'):
      ingredients=<div className={burgerStyle.Salad}></div>;
      break;
      case('bacon'):
      ingredients=<div className={burgerStyle.Bacon}></div>;
      break;
      default:
          ingredients=null;


    }

    return ingredients;


};

burgerIngredient.propTypes={
    type:PropTypes.string.isRequired
}

export default burgerIngredient;