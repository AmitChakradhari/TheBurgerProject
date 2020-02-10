import React,{ Component } from 'react';
import Aux from '../HOC/Aux';
import Burger from '../../Containers/Burger/Burger';
import * as ingredientType from './../../Utility/IngredientType';
import BuildControls from './../../Containers/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    [ingredientType.Meat]: 1.4,
    [ingredientType.Salad]: 0.5,
    [ingredientType.Cheese]: 0.9,
    [ingredientType.Bacon]: 1.8
}

class BurgerBuilder extends Component {
    state =  {
        ingredient: {
            [ingredientType.Meat]: 0,
            [ingredientType.Cheese]: 0,
            [ingredientType.Salad]: 0,
            [ingredientType.Bacon]: 0
        },
        totalPrice: 4
    };
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredient}/>
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}/>
            </Aux>
        );
    };

    addIngredientHandler = (ingredType) => {
        let copiedState = {...this.state.ingredient}
        let ingredientCountValue = copiedState[ingredType]
        ingredientCountValue = ingredientCountValue + 1
        copiedState[ingredType] = ingredientCountValue

        let oldPrice = {...this.state.totalPrice}
        let newPrice = oldPrice + INGREDIENT_PRICE[ingredType]

        this.setState({ingredient: copiedState,
            totalPrice: newPrice})
    }

    removeIngredientHandler = (ingredType) => {
        let copiedState = {...this.state.ingredient}
        let ingredientCountValue = copiedState[ingredType]
        ingredientCountValue = ingredientCountValue - 1
        copiedState[ingredType] = ingredientCountValue

        let oldPrice = {...this.state.totalPrice}
        let newPrice = oldPrice - INGREDIENT_PRICE[ingredType]

        this.setState({ingredient: copiedState,
            totalPrice: newPrice})
    }
}

export default BurgerBuilder;