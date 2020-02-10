import React,{ Component } from 'react';
import Aux from '../HOC/Aux';
import Burger from '../../Containers/Burger';
import * as ingredientType from './../../Utility/IngredientType';

class BurgerBuilder extends Component {
    state =  {
        ingredient: {
            [ingredientType.Meat]: 1,
            [ingredientType.Cheese]: 1,
            [ingredientType.Salad]: 1,
            [ingredientType.Bacon]: 1
        }
    };
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredient}/>
                <div>Burger Builder Controls</div>
            </Aux>
        );
    };
}

export default BurgerBuilder;