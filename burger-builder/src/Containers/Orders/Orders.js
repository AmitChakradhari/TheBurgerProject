import React,{Component} from 'react';
import Order from './Order/Order';
import axios from './../../axios-orders';
import withErrorHandler from './../../Components/HOC/withErrorHandler/withErrorHandler';
import * as actions from './../../Store/actions/index';
import {connect} from 'react-redux';
import Spinner from './../UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId)
    }
    render () {
        let orderView = <Spinner />
        if (!this.props.loading) {
            orderView = this.props.orders.map((ord) => {                
                return <Order key={ord.orderId} ingredients={ord.ingredients} price={ord.price}/>
            });
        }
        return (
            <div>
                {orderView}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders,axios));