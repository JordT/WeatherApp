import { useState } from 'react';
import './App.css';
import NextFiveDays from './components/DisplayWeather/NextFiveDays/NextFiveDays';
import SearchBar from './components/SearchBar/searchBar.js';
import defaultweather from './defaultweather.json';

function App() {
  
  // const defaultweather = './defaultweather.json'
  // We manage state here as we'll get it in SearchBar
  const [location, setLocation] = useState(defaultweather)

  return (
    <div className="App">
        <SearchBar />
        <NextFiveDays location={location}/>
    </div>
  );
}

export default App;
