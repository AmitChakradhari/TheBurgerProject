import React,{Component} from 'react';
import Aux from './../HOC/Aux';
import classes from './Layout.css';
import Toolbar from './../../Containers/Navigation/Toolbar/Toolbar';
import Sidedrawer from './../../Containers/Navigation/Sidedrawer/Sidedrawer';
import {connect} from 'react-redux';

class layout extends Component {
    state = {
        shouldShowSidedrawer: false
    };
    render() {
        
        return (
        <Aux>
            <Sidedrawer isAuthenticated={this.props.isAuthenticated} open={this.state.shouldShowSidedrawer} cancel={this.sidedrawerCancelHandler}/>
            <Toolbar isAuthenticated={this.props.isAuthenticated} menuButtonPressed={this.menuButtonPressedHandler}/>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
    sidedrawerCancelHandler = () => {
        this.setState({shouldShowSidedrawer: false})
    }

    menuButtonPressedHandler= () => {
        this.setState({shouldShowSidedrawer: true})
    }
}

const dispatchStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(dispatchStateToProps)(layout);