import React from 'react';
import logoImagePath from './../../Assets/Images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={logoImagePath} alt="LogoImage" />
    </div>
)

export default logo;