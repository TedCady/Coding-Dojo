import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [pokerMans, setPokerMans] = useState([])

  const fetchAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then(response => response.json())
    .then(response => {setPokerMans(upperBruh(response.results))});
  };

  const upperBruh = pokeMon => {
    for(let i = 0; i < pokeMon.length; i++){
      let temp = '';
      for(let ii = 0; ii < pokeMon[i].name.length; ii++){
        ii == 0 || pokeMon[i].name[ii - 1] == '-' ?
          temp += pokeMon[i].name[ii].toUpperCase() :
          temp += pokeMon[i].name[ii].toLowerCase()
      }
      pokeMon[i].name = temp;
    }
    return pokeMon;
  }

  return (
    <div className="App">
      <div style={{width: '30%'}}>
        <button onClick={fetchAPI}>Fetch Pokemon</button>
        <ul>
              {pokerMans.map((pMan, index) => {
                  return <li key={index} style={{textAlign:'left'}}>{pMan.name}</li>
              })}
        </ul>
      </div>
    </div>
  );
}

export default App;
