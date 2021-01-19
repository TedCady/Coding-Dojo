import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import './App.css';

import Macro from './components/Macro';
import Micro from './components/Micro';
import Show from './components/Show';

export default function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const macroNames = ['People', 'Starships', 'Planets'];

  useEffect(() => {
    let macroSet = [setPeople, setStarships, setPlanets];
    macroNames.map((item, index) => {
      axios.get(`https://swapi.dev/api/${item.toLowerCase()}/`)
        .then(response => response.data)
        .then(response => macroSet[index](response.results));
    });
  }, []);

  const macroAPI = [people, starships, planets];
  const [selectedMacro, setSelectedMacro] = useState([]);
  const [macro, setMacro] = useState(''); // for macro button highlights
  const [micro, setMicro] = useState(0); // for micro button highlights

  return (
    <div className='App'>
        <Macro 
          macro={macro} 
          macroNames={macroNames} 
          >
          <Router>
            <Micro path='/:mac/' 
              setMacro={setMacro} 
              macroNames={macroNames}
              macroAPI={macroAPI}
              selectedMacro={selectedMacro}
              setSelectedMacro={setSelectedMacro}
              micro={micro} 
              setMicro={setMicro}
              >
                <Show path=':mic' 
                  selectedMacro={selectedMacro}
                  setMicro={setMicro}
                  macro={macro}
                />
            </Micro>
          </Router>
        </Macro>
    </div>
  )
}