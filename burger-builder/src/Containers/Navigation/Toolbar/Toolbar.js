import React from 'react';
import classes from './Toolbar.css';
import Logo from './../../../Components/Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems'
import MenuItem from './../Sidedrawer/MenuItem/MenuItem';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuItem clicked={props.menuButtonPressed}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuthenticated}/>
        </nav>
    </header>
)

export default toolbar;