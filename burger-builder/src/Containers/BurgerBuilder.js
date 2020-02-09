import React,{ Component } from 'react';
import Aux from '../Components/HOC/Aux';
import Burger from './Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Burger Builder Controls</div>
            </Aux>
        );
    };
}

export default BurgerBuilder;