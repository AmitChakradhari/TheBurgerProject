import * as actionTypes from './actionTypes';
import axiosInstance from './../../axios-orders';

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        
        axiosInstance.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            } )
            .catch( error => {
                console.log({error},"error");
                
                dispatch(purchaseBurgerFailed(error))
            } );
    }
}

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        let order = []
        axiosInstance.get('/orders.json?auth=' + token)
        .then((response) => {            
            for (let key in response.data) {  
                order.push({
                    ...response.data[key],
                    orderId:key
                })
            }
            dispatch(fetchOrdersSuccess(order))          
        })
        .catch((error) => {
            dispatch(fetchOrdersFailed(error))
        })
    }
}