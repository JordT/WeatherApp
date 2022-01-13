import { useState } from 'react';
import './App.css';

function App() {
  // We manage state here as we'll get it in SearchBar
  const [state, setLocation] = useState({currentLocation: "Monaco"})

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <DisplayWeather props={state}/>
      </header>
    </div>
  );
}

export default App;
