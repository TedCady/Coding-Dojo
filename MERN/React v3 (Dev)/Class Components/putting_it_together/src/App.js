import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Ethan' lastName='Mace' age={30} hairColor='Blonde'/>
      <PersonCard firstName='Jane' lastName='Doe' age={45} hairColor='Black'/>
      <PersonCard firstName='John' lastName='Smith' age={88} hairColor='Brown'/>
    </div>
  );
}

export default App;
