import { Router } from '@reach/router';
import React from 'react';
import Hello from './components/Hello';
import NumBer from './components/NumBer'
import HelloColors from './components/HelloColors'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Hello path='/home'/>
        <NumBer path='/:num'/>
        <HelloColors path='/hello/:c1/:c2' />
      </Router>
    </div>
  );
}

export default App;