import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Logo from './../../../Components/Logo/Logo';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../Components/HOC/Aux';

const sidedrawer = (props) => {
    let classList = [classes.Sidedrawer, classes.Open]
    classList = props.open ? [classes.Sidedrawer, classes.Open].join(' ') : [classes.Sidedrawer, classes.Close].join(' ')
    return (
        <Aux>
        <Backdrop show={props.open} cancel={props.cancel} />
        <div className={classList}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Aux>
    )
}

export default sidedrawer;