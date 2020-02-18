import React,{Component} from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import * as IngredientType from './../../Utility/IngredientType';

class Checkout extends Component {
    state={
        ingredients:{
            Meat:1,
            Salad:1,
            Cheese:1,
            Bacon:1
        }
    }
    componentDidMount() {
        let searchParams = new URLSearchParams(this.props.location.search)
        let ingredient = {}
        ingredient[IngredientType.Meat]= +searchParams.get(IngredientType.Meat)
        ingredient[IngredientType.Cheese]= +searchParams.get(IngredientType.Cheese)
        ingredient[IngredientType.Salad]= +searchParams.get(IngredientType.Salad)
        ingredient[IngredientType.Bacon]= +searchParams.get(IngredientType.Bacon)
        this.setState({
            ingredients:ingredient
        })
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    cancelCheckout={this.cancelCheckout}
                    continueCheckout={this.continueCheckout}/>
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