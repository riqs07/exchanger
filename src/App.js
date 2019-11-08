import React from 'react';
import './App.css';
import Wrapper from './components/styled/Wrapper';

import Card from './components/styled/Card'
import Button from './components/styled/Button'
import Exchange from './pages/Exchange'
import Comparison from './pages/Comparison';
import CurrencyFinder from './pages/CurrencyFind';

function App() {
  return (
    <Wrapper>

      <Card>
        <CurrencyFinder />
        {/* <Button text="Compare" onClick={() => console.log('compare')} />
        <Button text="Historical Comparision" />
        <Button text="Exchange Money 💱" /> */}
      </Card>
    </ Wrapper >
  );
}




export default App;
