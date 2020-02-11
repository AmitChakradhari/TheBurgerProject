import React from 'react';
import classes from './BuildControl.css'
import * as ingredientTypes from './../../../../Utility/IngredientType'

const buildControl = (props) => {
    return <div className={classes.BuildControl}>
        <label className={classes.Label}>
            {props.ingredientName}</label>
        <button className={classes.Less} 
            onClick={props.removeIngredient}
            disabled={props.buttonDisabled}>less</button>
        <button className={classes.More} 
            onClick={props.addIngredient}>more</button>
    </div>
};

export default buildControl;