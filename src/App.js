import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import DisplayWeather from './components/DisplayWeather/NextFiveDays/example'

function App() {
  // We manage state here as we'll get it in SearchBar
  const [location, setLocation] = useState({currentLocation: "Monaco"})

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <DisplayWeather props={location}/>
      </header>
    </div>
  );
}

export default App;
