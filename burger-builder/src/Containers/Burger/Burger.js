import React from 'react';
import classes from './Burger.css'
import * as types from '../../Utility/IngredientType';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let ingredientItems = Object.keys(props.ingredients)
    .map((ingredientKey) => {
        return [...Array(props.ingredients[ingredientKey])]
        .map((_,i) => {
            return <BurgerIngredient key={ingredientKey+i} type={ingredientKey}/>
        });
    })
    .reduce((arr, ele) => {
        return arr.concat(ele)
    },[]);
    
    if (ingredientItems.length === 0) {
        ingredientItems = <p>Please add ingredients.</p>
    }

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = {types.BreadTop}/>
            {ingredientItems}
            <BurgerIngredient type = {types.BreadBottom} />
        </div>
    );
};

export default burger;