import React from 'react';
import classes from './Burger.css'
import * as types from './../Utility/IngredientType';
import BurgerIngredient from './BurgerIngredient'
const burger = (props) => {
    return (
        <div className = {classes.Burger}>
            <h1>burgerrrr</h1>
            <BurgerIngredient type = {types.BreadTop}/>
            <BurgerIngredient type = {types.Meat} />
            <BurgerIngredient type = {types.Salad} />
            <BurgerIngredient type = {types.BreadBottom} />
        </div>
    )
}
export default burger;