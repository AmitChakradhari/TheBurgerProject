import React from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/CheckoutPage/Checkout';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className={classes.App}>
      <Aux>
        
        <Layout>
          <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
        
      </Aux>
    </div>
  );
}

export default App;
