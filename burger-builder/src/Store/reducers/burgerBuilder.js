import * as actionTypes from './../actions/actionTypes';
import * as ingredientType from '../../Utility/IngredientType';

const INGREDIENT_PRICE = {
    [ingredientType.Meat]: 1.4,
    [ingredientType.Salad]: 0.5,
    [ingredientType.Cheese]: 0.9,
    [ingredientType.Bacon]: 1.8
}
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
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
        case (actionTypes.SET_INGREDIENT):
                return {
                    ...state,
                    ingredients: action.ingredients,
                    error: false
                }
        case (actionTypes.FETCH_INGREDIENTS_FAILED):
                return {
                    ...state,
                    error: true
                } 
        default:
                return state
    }
}

export default reducer;