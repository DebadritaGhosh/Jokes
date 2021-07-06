import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [firstName, setFirstName] = useState('Debadrita');
  const [lastName, setLastName] = useState('Ghosh');
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, [])

  const fetchJoke = () => {
    fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
      .then(response => response.json())
      .then(responseJoke => setJoke(responseJoke.value.joke))
      .catch((error) => console.log(error))
  }
  return (
    <div className="App flex">
      <h2>{joke}</h2>
      <div className="inputBox flex">
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button onClick={fetchJoke}>Show Jokes</button>
      </div>
    </div>
  );
}

export default App;
