import React from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Aux from './Components/HOC/Aux'
import BurgerBuilder from './Containers/BurgerBuilder';

function App() {
  return (
    <div className={classes.App}>
      <Aux>
        <Layout />
        <BurgerBuilder />
      </Aux>
    </div>
  );
}

export default App;
