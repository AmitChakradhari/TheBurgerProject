import React from 'react';
import DrawerToggle from './../DrawerToggle/DrawerToggle';

const menuItem = (props) => (
    <div onClick={props.clicked}>
        <DrawerToggle />
    </div>
)

export default menuItem;