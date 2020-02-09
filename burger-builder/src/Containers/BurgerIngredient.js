import React from 'react';
import classes from './BurgerIngredient.css';
import * as types from './../Utility/IngredientType';

const burgerIngredient = (props) => {
    
    let ingredient = null

    switch (props.type) {
        case (types.BreadBottom):
            ingredient = <div className = {classes.BreadBottom}></div>
            break;
        case (types.BreadTop):
            ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
        case (types.Meat):
            ingredient = <div className = {classes.Meat}></div>;
            break;
        case (types.Cheese):
            ingredient = <div className = {classes.Cheese}></div>;
            break;
        case (types.Salad):
            ingredient = <div className = {classes.Salad}></div>;
            break;
        case (types.Bacon):
            ingredient = <div className = {classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
            break;
    }

    return ingredient;
}
export default burgerIngredient;