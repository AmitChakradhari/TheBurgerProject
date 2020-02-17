import React from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className={classes.App}>
      <Aux>
        {/* <Route path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={} /> */}
        <Layout />
        <BurgerBuilder />
      </Aux>
    </div>
  );
}

export default App;
