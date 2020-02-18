import React from 'react';
import Button from './../../UI/Button/Button';
import Burger from './../../Burger/Burger';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => (
    <div className={classes.CheckoutSummary}>
        <p>This is order summary</p>
        <div style={{width:'100%', margin:'auto'}}>
            <Burger ingredients={props.ingredients}></Burger>
        </div>
        
        <Button 
            btnType='Danger' 
            clicked={props.cancelCheckout}>Cancel</Button>
        <Button 
            btnType='Success'
            clicked={props.continueCheckout}>Continue </Button>
    </div>
)

export default checkoutSummary;