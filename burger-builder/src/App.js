import React from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/CheckoutPage/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';

function App() {
  return (
    <div className={classes.App}>
      <Aux>
        
        <Layout>
          <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/' component={BurgerBuilder} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          </Switch>
        </Layout>
        
      </Aux>
    </div>
  );
}

export default App;