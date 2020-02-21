import * as actionTypes from './action';
import * as ingredientType from './../Utility/IngredientType';

const INGREDIENT_PRICE = {
    [ingredientType.Meat]: 1.4,
    [ingredientType.Salad]: 0.5,
    [ingredientType.Cheese]: 0.9,
    [ingredientType.Bacon]: 1.8
}
const initialState = {
    ingredients: {
        Meat: 0,
        Cheese: 0,
        Salad: 0,
        Bacon: 0
    },
    totalPrice: 4
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case (actionTypes.ADD_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            }
        case (actionTypes.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
        default:
                return state
    }
}

export default reducer;