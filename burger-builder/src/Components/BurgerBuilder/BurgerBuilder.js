import React,{ Component } from 'react';
import Aux from '../HOC/Aux';
import Burger from '../../Containers/Burger/Burger';
import BuildControls from './../../Containers/Burger/BuildControls/BuildControls';
import Modal from './../../Containers/UI/Modal/Modal';
import OrderSummary from './../../Containers/OrderSummary/OrderSummary';
import axiosInstance from './../../axios-orders';
import Spinner from './../../Containers/UI/Spinner/Spinner';
import withErrorHandler from './../HOC/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../Store/actions/index';

class BurgerBuilder extends Component {
    state =  {
        purchasing: false,
        isLoading: false,
        errorFound: false
    };

    componentDidMount() {
        // axiosInstance.get('/ingredients.json')
        // .then(response => {
        //     this.setState({
        //         ingredient:response.data
        //     })
        // })
        // .catch(error => {
        //     this.setState({errorFound:true})
        // })
    }

    render() {
        let disabledInfo = {
            ...this.props.ingredientState
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderDetails = null

        if (this.state.isLoading) {
            orderDetails = <Spinner />
        }
        let burgerView = this.state.errorFound ? <p>Unable to fetch ingredients</p> : <Spinner />

        if (this.props.ingredientState) {
            burgerView = (
                <Aux>
                    <Burger ingredients = {this.props.ingredientState}/>
                    <BuildControls 
                        buttonDisabled = {disabledInfo}
                        addIngredient={this.props.onIngredientAdded}
                        removeIngredient={this.props.onIngredientRemoved}
                        price={this.props.price}
                        purchasable={this.updatePurchasable(this.props.ingredientState)}
                        orderClicked={this.purchaseHandler}/>
                </Aux>
            )

            orderDetails = <OrderSummary orderSummary={this.props.ingredientState} 
            continueOrder={this.continuePurchaseHandler} 
            cancelOrder={this.cancelPurchaseHandler}
            totalPrice={this.props.price}/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    cancelPurchase={this.cancelPurchaseHandler}>
                        {orderDetails}
                </Modal>
                {burgerView}                
            </Aux>
        );
    };

    continuePurchaseHandler = () => {
        this.props.history.push('/checkout')
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

        return updatedPurchasableState > 0
    }
 }

const mapStateToProps = (state) => {
    return {
        ingredientState: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axiosInstance));