import React,{Component} from 'react';
import Aux from './../HOC/Aux';
import classes from './Layout.css';
import Toolbar from './../../Containers/Navigation/Toolbar/Toolbar';
import Sidedrawer from './../../Containers/Navigation/Sidedrawer/Sidedrawer';

class layout extends Component {
    state = {
        shouldShowSidedrawer: false
    };
    render() {
        
        return (
        <Aux>
            <Sidedrawer open={this.state.shouldShowSidedrawer} cancel={this.sidedrawerCancelHandler}/>
            <Toolbar menuButtonPressed={this.menuButtonPressedHandler}/>
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

export default layout;