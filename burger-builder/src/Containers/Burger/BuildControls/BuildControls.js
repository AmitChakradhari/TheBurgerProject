import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import * as ingredientTypes from './../../../Utility/IngredientType'

const controls = [
    ingredientTypes.Meat,
    ingredientTypes.Salad,
    ingredientTypes.Bacon,
    ingredientTypes.Cheese,
]

const buildControls = (props) => {

    return (
        <div className={classes.BuildControl}>
            {controls
                .map( (ctr) => <BuildControl 
                key={ctr} 
                ingredientName={ctr} 
                addIngredient={() => {props.addIngredient(ctr)}}
                removeIngredient={() => props.removeIngredient(ctr)}/>
            )}
        </div>
    )
};

export default buildControls;