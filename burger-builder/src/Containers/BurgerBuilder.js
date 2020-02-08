import React,{ Component } from 'react';
import Aux from './../Components/HOC/Aux';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Burger Builder Controls</div>
            </Aux>
        );
    };
}

export default BurgerBuilder;