import React from 'react';
import NavigationItems from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItems link="/" active>BurgerBuilder</NavigationItems>
        <NavigationItems link="/">Checkout</NavigationItems>
    </ul>
)

export default navigationItems;