import React,{ Component } from 'react';
import Aux from '../HOC/Aux';
import Burger from '../../Containers/Burger/Burger';
import * as ingredientType from './../../Utility/IngredientType';
import BuildControls from './../../Containers/Burger/BuildControls/BuildControls';
import Modal from './../../Containers/UI/Modal/Modal';
import OrderSummary from './../../Containers/OrderSummary/OrderSummary';
import axiosInstance from './../../axios-orders';
import Spinner from './../../Containers/UI/Spinner/Spinner';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        isLoading: false
    };

    render() {
        let disabledInfo = {
            ...this.state.ingredient
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderDetails = <OrderSummary orderSummary={this.state.ingredient} 
        continueOrder={this.continuePurchaseHandler} 
        cancelOrder={this.cancelPurchaseHandler}
        totalPrice={this.state.totalPrice}/>

        if (this.state.isLoading) {
            orderDetails = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    cancelPurchase={this.cancelPurchaseHandler}>
                        {orderDetails}
                    </Modal>
                <Burger ingredients = {this.state.ingredient}/>
                <BuildControls 
                buttonDisabled = {disabledInfo}
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                orderClicked={this.purchaseHandler}/>
            </Aux>
        );
    };

    continuePurchaseHandler = () => {

        this.setState({
            isLoading: true
        })
        axiosInstance.post('/orders.json',{
            ingredients: this.state.ingredient,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Amit',
                email: 'a@gmail.com',
                address: {
                    city: 'Bengaludu',
                    pin: 690095
                }
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                isLoading: false,
                purchasing: false
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                isLoading: false,
                purchasing: false
            })
        })
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    updatePurchasable = (ingredState) => {
        let updatedPurchasableState = Object.keys(ingredState).map((ingredientKey) => {
            return ingredState[ingredientKey]
        }).reduce((initialNum, ele) => {
            return initialNum + ele
        },0);

        this.setState({purchasable:updatedPurchasableState > 0})
    }

    addIngredientHandler = (ingredType) => {
        let copiedState = {...this.state.ingredient}
        let ingredientCountValue = copiedState[ingredType]
        ingredientCountValue = ingredientCountValue + 1
        copiedState[ingredType] = ingredientCountValue

        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice + INGREDIENT_PRICE[ingredType]

        this.setState({ingredient: copiedState,
            totalPrice: newPrice})
        this.updatePurchasable(copiedState)
    }

    removeIngredientHandler = (ingredType) => {
        let copiedState = {...this.state.ingredient}
        let ingredientCountValue = copiedState[ingredType]
        ingredientCountValue = ingredientCountValue - 1
        copiedState[ingredType] = ingredientCountValue

        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice - INGREDIENT_PRICE[ingredType]

        this.setState({ingredient: copiedState,
            totalPrice: newPrice})
        this.updatePurchasable(copiedState)
    }
}

export default BurgerBuilder;