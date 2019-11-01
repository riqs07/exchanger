import React from 'react';
import './App.css';
import Wrapper from './components/styled/Wrapper';

import Card from './components/styled/Card'
import Button from './components/styled/Button'
import Selection from './components/Selection';
import TextBox from './components/TextBox';


function App() {
  return (
    <Wrapper>

      <Card>
        <TextBox />
        <TextBox />
        <Selection />
        <Selection />

        <Button text="Compare" onClick={() => console.log('compare')} />
        <Button text="Historical Comparision" />
        <Button text="Exchange Money" />
      </Card>
    </ Wrapper >
  );
}




export default App;
