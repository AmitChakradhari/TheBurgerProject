import React,{Component} from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state={
        ingredients:{
            Meat:1,
            Salad:1,
            Cheese:1,
            Bacon:2
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;