import React, { useState } from 'react';
import Pokemon from './components/Pokemon';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

  const getAPI = () => {
    axios.get(pokeURL)
      .then(response => response.data)
      .then(response => setPokemon(upperPoke(response.results)));
  }

  const upperPoke = input => {
    let arr = [];
    for(let i = 0; i < input.length; i++){
      let temp = '';
      for(let ii = 0; ii < input[i].name.length; ii++){
        ii == 0 || input[i].name[ii - 1] == '-' ?
          temp += input[i].name[ii].toUpperCase() :
          temp += input[i].name[ii].toLowerCase()
      }
      arr.push({name: temp});
    }
    return arr;
  }

  return (
    <div className="App">
      <div>
        <button onClick={getAPI}>Fetch Pokemon</button>
      </div>
        {pokemon == null ? null :
        <ul style={{listStyle:'none'}}>
        {pokemon.map((p) => {
          return <li style={{textAlign:'left'}}><Pokemon poke={p.name}/></li>
        })}
        </ul>
        }
    </div>
  );
}

export default App;
