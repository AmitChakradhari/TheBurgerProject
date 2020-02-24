import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">BurgerBuilder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        { !props.isAuthenticated ? 
            <NavigationItem link="/auth">Authenticate</NavigationItem> :
            <NavigationItem link="/logout">LogOut</NavigationItem>}
    </ul>
)

export default navigationItems;