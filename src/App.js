import React, { Fragment } from 'react';
import './App.css';
import Wrapper from './components/styled/Wrapper';

import Card from './components/styled/Card'
import Exchange from './pages/Exchange'
import Comparison from './pages/Comparison';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Nav from './components/Nav'
import CurrencyFinder from './pages/CurrencyFind';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Fragment>
      <Router>
        <Nav />

        <Wrapper>

          <Card>

            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/comparison' component={Comparison} />
              <Route exact path='/exchange' component={Exchange} />
              <Route path='/currencyFinder' component={CurrencyFinder} />
              <Route render={PageNotFound} />
            </Switch>

          </Card>
        </ Wrapper >

      </Router>

    </Fragment>

  );
}




export default App;
