import React,{useEffect, Suspense, useCallback} from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';

import {Route, Switch, Redirect} from 'react-router-dom';

import Auth from './Containers/Auth/Auth';
import {connect} from 'react-redux';
import * as actions from './Store/actions/index';

const Checkout = React.lazy(() => {
  return import('./Containers/CheckoutPage/Checkout')
})

const Orders = React.lazy(() => {
  return import ('./Containers/Orders/Orders')
})

const Logout = React.lazy(() => {
  return import ('./Containers/Auth/Logout/Logout')
})

const App = (props) => {

  const onTrySignupProp = useCallback(
    () => {
      props.onTrySignup()
    },
    useEffect(() => {
      onTrySignupProp()
    },[])
  )

  useEffect(() => {
    onTrySignupProp()
  },[])

  let routes = (
    <Switch>
      <Route exact path='/' component={BurgerBuilder} />
      <Route path='/auth' render={(props) => (<Auth {...props}/>)} />
      <Redirect to='/' />
    </Switch>
  )

  if (props.isAuthenticated) {
    routes = (
      <Switch>
          <Route path='/checkout' render={(props)=> (<Checkout {...props}/>)} />
          <Route exact path='/'  component={BurgerBuilder} />
          <Route path='/orders' render={(props)=> (<Orders {...props}/>)} />
          <Route path='/logout' render={(props)=> (<Logout {...props}/>)} />
          <Redirect to='/' />
        </Switch>
    )
  }

  return (
    <div className={classes.App}>
      <Aux>
        
        <Layout>
          <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>
        </Layout>
        
      </Aux>
    </div>
  )
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