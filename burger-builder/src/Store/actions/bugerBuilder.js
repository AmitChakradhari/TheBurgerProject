import * as actionTypes from './actionTypes';
import axiosInstance from './../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const initIngredient = () => {
    return dispatch => {
        axiosInstance.get('/ingredients.json')
        .then(response => {
            dispatch(setIngredient(response.data))
        })
        .catch(error => {
            dispatch(fetchIngredientFailed())
        })
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}