import React from 'react';
import Aux from './../HOC/Aux';
import classes from './Layout.css';
import Toolbar from './../../Containers/Navigation/Toolbar/Toolbar';
import Sidedrawer from './../../Containers/Navigation/Sidedrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <Sidedrawer />
        <Toolbar />
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;