import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhJKvDEX_D3hCMhQn5ZckYoqfaZROSIKU'
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhJKvDEX_D3hCMhQn5ZckYoqfaZROSIKU'
        }
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post(url, authData)
        .then((response) => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))            
        })
        .catch((error) => {
            console.log(error)
            dispatch(authFail(error.response.data.error))
        })
    }
}