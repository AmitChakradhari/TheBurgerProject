import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Logo from './../../../Components/Logo/Logo';

const sidedrawer = () => (
    <div className={classes.Sidedrawer}>
        <div className={classes.Logo}>
        <Logo />
        </div>
        <nav>
        <NavigationItems />
        </nav>
    </div>
)

export default sidedrawer;