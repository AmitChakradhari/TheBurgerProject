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
        }
    }
    render () {
        return (
            <div className={classes.ContactData}>
                <p>Enter your contact data</p>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='location' placeholder='Location' />
                </form>
                <Button btnType='Success'>ORDER</Button>
            </div>
        )
    }
    oderButtonClicked = () => {
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
}

export default ContactData;