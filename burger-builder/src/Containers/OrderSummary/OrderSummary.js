import React from 'react';
import Aux from './../../Components/HOC/Aux';
import Button from './../UI/Button/Button';

const orderSummary = (props) => {
    let orderDetails = Object.keys(props.orderSummary).map(ingKey => {
    return <li key={ingKey}><span>{ingKey}</span>: {props.orderSummary[ingKey]}</li>
    });
    return <Aux>
        <div>You are going to order:</div>
        {orderDetails}
        <p><strong>Total Price:{props.totalPrice.toFixed()}</strong></p>
        <div>Continue to order</div>
        <Button btnType='Danger' clicked={props.cancelOrder}>Cancel</Button>
        <Button btnType='Success' clicked={props.continueOrder}>Continue</Button>
    </Aux>
}

export default orderSummary;