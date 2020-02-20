import React,{Component} from 'react';
import Button from './../../UI/Button/Button';
import classes from './ContactData.css';
import axiosInstance from './../../../axios-orders';
import Spinner from './../../UI/Spinner/Spinner';

class ContactData extends Component {
    state={
        name:'',
        email:'',
        address:{
            street:'',
            location:''
        },
        isLoading:false
    }
    render () {
        let formView = this.state.isLoading ? <Spinner /> : (
            <div>
                <p>Enter your contact data</p>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='location' placeholder='Location' />
                </form>
                <Button btnType='Success' clicked={this.orderButtonClicked}>ORDER</Button>
            </div>
        )

        return (
            <div className={classes.ContactData}>
                {formView}
            </div>
        )
    }
    orderButtonClicked = () => {
        this.setState({
            isLoading: true
        })
        axiosInstance.post('/orders.json',{
            ingredients: this.props.ingredients,
            totalPrice: this.state.price,
            customer: {
                name: this.state.name,
                email: this.state.email,
                address: { ...this.state.address,
                    city: 'Bengaluru',
                    pin: 690095
                }
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                isLoading: false,
            })
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error)
            this.setState({
                isLoading: false,
            })
        })
    }
}

export default ContactData;