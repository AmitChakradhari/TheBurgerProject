import React from 'react';
import classes from './Order.css';

const Order = (props) => {
     let ingredients=[]
     let ingredientList=null
    for (let ingredientKey in props.ingredients) {
        ingredients.push({
            name:ingredientKey,
            quantity:props.ingredients[ingredientKey]
        })
    }

    ingredientList =  ingredients.map((ing)=>{
        return (
             <span 
             style={{textTransform:'capitalize',
                    display:'inline-block',
                    margin:'0 8px',
                    border:'1px solid #ccc',
                    padding:'5px'}}
            key={ing.name}>{ing.name} ({ing.quantity}) </span>
        )
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientList}</p>
            <p><strong>Price:{props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default Order;
