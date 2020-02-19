import React,{Component} from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import * as IngredientType from './../../Utility/IngredientType';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

const PRICE_NAME = 'price'

class Checkout extends Component {
    state={
        ingredients: {
            Meat:0,
            Salad:0,
            Cheese:0,
            Bacon:0
        },
        price:0
    }
    componentDidMount() {
        let searchParams = new URLSearchParams(this.props.location.search)
        let ingredient = {}
        ingredient[IngredientType.Meat]= +searchParams.get(IngredientType.Meat)
        ingredient[IngredientType.Cheese]= +searchParams.get(IngredientType.Cheese)
        ingredient[IngredientType.Salad]= +searchParams.get(IngredientType.Salad)
        ingredient[IngredientType.Bacon]= +searchParams.get(IngredientType.Bacon)
        this.setState({
            ingredients:ingredient,
            price:+searchParams.get(PRICE_NAME)
        })
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    cancelCheckout={this.cancelCheckout}
                    continueCheckout={this.continueCheckout}/>
                    
                <Route path={this.props.match.path + '/contact-data'} render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.price} />)} />
            </div>
        )
    }

    cancelCheckout = () => {
        this.props.history.goBack()
    }

    continueCheckout = () => {
        this.props.history.replace('checkout/contact-data')        
    }
}

export default Checkout;