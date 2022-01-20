import { useState } from 'react';
import './App.css';
import NextFiveDays from './components/DisplayWeather/NextFiveDays/NextFiveDays';
import SearchBar from './components/SearchBar/searchBar.js';
import defaultweather from './exampleData.json';
import SunPosition from './components/DisplayWeather/SunPosition/SunPosition'

// const { DateTime } = require("luxon");

function App() {
  
  // const defaultweather = './defaultweather.json'
  // We manage state here as we'll get it in SearchBar
  const [weatherInfo, setWeatherInfo] = useState(defaultweather)
  
  return (
    <div className="App">
        <SearchBar onSearch={setWeatherInfo}/>
        <NextFiveDays location={weatherInfo}/>
        <SunPosition sunData={weatherInfo.current}/>
    </div>
  );
}

export default App;
