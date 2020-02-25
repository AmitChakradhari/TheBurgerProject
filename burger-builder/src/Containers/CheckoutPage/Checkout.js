import React from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

const Checkout = (props) => {
    
        let summary = <Redirect to='/' />

        const cancelCheckout = () => {
            props.history.goBack()
        }

        const continueCheckout = () => {
            props.history.replace('checkout/contact-data')        
        }

        if (props.ingredientState) {
            const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={props.ingredientState}
                        cancelCheckout={cancelCheckout}
                        continueCheckout={continueCheckout}/>
                    <Route path={props.match.path + '/contact-data'} component={ContactData}/>
                </div>
            )
        }
        return summary
}
const mapStateToProps = (state) => {
    return {
        ingredientState: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);