import React from 'react';
import Aux from './../../Components/HOC/Aux';

const orderSummary = (props) => {
    let orderDetails = Object.keys(props.orderSummary).map(ingKey => {
    return <li key={ingKey}><span>{ingKey}</span>: {props.orderSummary[ingKey]}</li>
    });
    return <Aux>
        <div>You are going to order:</div>
        {orderDetails}
        <div>Continue to order</div>
    </Aux>
}

export default orderSummary;