import React,{useState} from 'react';
import Aux from './../HOC/Aux';
import classes from './Layout.css';
import Toolbar from './../../Containers/Navigation/Toolbar/Toolbar';
import Sidedrawer from './../../Containers/Navigation/Sidedrawer/Sidedrawer';
import {connect} from 'react-redux';

const Layout = (props) => {

    const [shouldShowSidedrawer, setShouldShowSidedrawer] = useState(false)

    const sidedrawerCancelHandler = () => {
        setShouldShowSidedrawer(false)
    }

    const menuButtonPressedHandler = () => {
        setShouldShowSidedrawer(true)
    }

        return (
        <Aux>
            <Sidedrawer isAuthenticated={props.isAuthenticated} open={shouldShowSidedrawer} cancel={sidedrawerCancelHandler}/>
            <Toolbar isAuthenticated={props.isAuthenticated} menuButtonPressed={menuButtonPressedHandler}/>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
        )
    
    
}

const dispatchStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(dispatchStateToProps)(Layout);