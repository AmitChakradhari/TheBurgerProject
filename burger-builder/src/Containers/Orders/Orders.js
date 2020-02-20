import React,{Component} from 'react';
import Order from './Order/Order';
import axios from './../../axios-orders';
import withErrorHandler from './../../Components/HOC/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state={
        isLoading: false,
        orders: []
    }
    componentDidMount() {
        let order = []
        //this.setState({isLoading:true})
        axios.get('/orders.json')
        .then((res) => {

            for (let key in res.data) {  
                order.push({
                    ...res.data[key],
                    orderId:key
                })
            }
            this.setState({orders:order})            
            //this.setState({isLoading:false})
        })
        .catch(() => {
            //this.setState({isLoading:false})
        })
        
    }
    render () {
        
        let ordersView = this.state.orders.map((ord) => {
            return <Order key={ord.orderId} ingredients={ord.ingredients} price={ord.price}/>
        });
        return (
            <div>
                {ordersView}
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios);