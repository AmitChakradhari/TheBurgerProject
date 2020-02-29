import React,{ useState, useEffect, useCallback } from 'react';
import Aux from '../HOC/Aux';
import Burger from '../../Containers/Burger/Burger';
import BuildControls from './../../Containers/Burger/BuildControls/BuildControls';
import Modal from './../../Containers/UI/Modal/Modal';
import OrderSummary from './../../Containers/OrderSummary/OrderSummary';
import axiosInstance from './../../axios-orders';
import Spinner from './../../Containers/UI/Spinner/Spinner';
import withErrorHandler from './../HOC/withErrorHandler/withErrorHandler';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as actions from '../../Store/actions/index';

function BurgerBuilder(props) {

    const [purchasing, setPurchasing] = useState(false)

    const dispatch = useDispatch()

    const ingredientState = useSelector((state) => {
        return state.burgerBuilder.ingredients
    })

    const price = useSelector((state) => {
        return state.burgerBuilder.totalPrice
    })

    const error = useSelector((state) => {
        return state.burgerBuilder.error
    })

    const isAuthenticated = useSelector((state) => {
        return state.auth.token !== null
    })

    function onIngredientAdded(ingName) {
        dispatch(actions.addIngredient(ingName))
    }

    function onIngredientRemoved(ingName) { 
        dispatch(actions.removeIngredient(ingName))
    }

    const onInitIngredients = useCallback(
        () => {
            dispatch(actions.initIngredient())
        },
        [dispatch]
    )
    
    function onInitPurchase() {
        dispatch(actions.purchaseInit())
    }
    function onSetRedirectionPath(path){ 
        dispatch(actions.setAuthRedirect(path))
    }


    useEffect(() => {
        onInitIngredients()
    },[onInitIngredients])



    function continuePurchaseHandler() {
        onInitPurchase()
        props.history.push('/checkout')
    }

    function cancelPurchaseHandler() {
        setPurchasing(false)
    }

    function purchaseHandler() {
        if (isAuthenticated) {
            setPurchasing(true)
        } else {
            onSetRedirectionPath('/checkout')
            props.history.push('/auth')
        }
        
    }

    function updatePurchasable(ingredState) {
        let updatedPurchasableState = Object.keys(ingredState).map((ingredientKey) => {
            return ingredState[ingredientKey]
        }).reduce((initialNum, ele) => {
            return initialNum + ele
        },0);

        return updatedPurchasableState > 0
    }

    let disabledInfo = {
        ...ingredientState
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderDetails = null

    let burgerView = error ? <p>Unable to fetch ingredients</p> : <Spinner />

    if (ingredientState) {
        burgerView = (
            <Aux>
                <Burger ingredients = {ingredientState}/>
                <BuildControls 
                    buttonDisabled = {disabledInfo}
                    addIngredient={onIngredientAdded}
                    removeIngredient={onIngredientRemoved}
                    price={price}
                    purchasable={updatePurchasable(ingredientState)}
                    orderClicked={purchaseHandler}
                    isAuth={isAuthenticated}/>
            </Aux>
        )

        orderDetails = <OrderSummary orderSummary={ingredientState} 
        continueOrder={continuePurchaseHandler} 
        cancelOrder={cancelPurchaseHandler}
        totalPrice={price}/>
    }

    return (
        <Aux>
            <Modal show={purchasing}
                cancelPurchase={cancelPurchaseHandler}>
                    {orderDetails}
            </Modal>
            {burgerView}                
        </Aux>
    )

 }

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axiosInstance));