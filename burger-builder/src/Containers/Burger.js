import React from 'react';
import classes from './Burger.css'
import * as types from './../Utility/IngredientType';
import BurgerIngredient from './BurgerIngredient'
const burger = (props) => {
    let ingredientItems = Object.keys(props.ingredients)
    .map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])]
        .map((_,i) => {
            return <BurgerIngredient key={ingredientKey+i} type={ingredientKey}/>
        });
    });
    return (
        <div className = {classes.Burger}>
            <h1>burgerrrr</h1>
            <BurgerIngredient type = {types.BreadTop}/>
            {ingredientItems}
            <BurgerIngredient type = {types.BreadBottom} />
        </div>
    );
};
export default burger;