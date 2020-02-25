import React,{Component} from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/CheckoutPage/Checkout';
import {Route, Switch, Redirect} from 'react-router-dom';
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

    let routes = (
      <Switch>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/auth' component={Auth} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route exact path='/' component={BurgerBuilder} />
            <Route path='/orders' component={Orders} />
            <Route path='/logout' component={Logout} />
            <Redirect to='/' />
          </Switch>
      )
    }

    return (
      <div className={classes.App}>
        <Aux>
          
          <Layout>
            {routes}
          </Layout>
          
        </Aux>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrySignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);