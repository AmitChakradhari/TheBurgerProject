import React,{Component} from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {
    
    render() {
        let summary = <Redirect to='/' />
        if (this.props.ingredientState) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ingredientState}
                        cancelCheckout={this.cancelCheckout}
                        continueCheckout={this.continueCheckout}/>
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
                </div>
            )
        }
        return summary
    }

    cancelCheckout = () => {
        this.props.history.goBack()
    }

    continueCheckout = () => {
        this.props.history.replace('checkout/contact-data')        
    }
}
const mapStateToProps = (state) => {
    return {
        ingredientState: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);