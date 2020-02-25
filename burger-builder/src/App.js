import React,{Component} from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/CheckoutPage/Checkout';
import {Route, Switch, withRouter} from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './Store/actions/index';

class App extends Component {

  componentDidMount () {
    this.props.onTrySignup()
  }
  render () {
    return (
      <div className={classes.App}>
        <Aux>
          
          <Layout>
            <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route exact path='/' component={BurgerBuilder} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />
            </Switch>
          </Layout>
          
        </Aux>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrySignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);