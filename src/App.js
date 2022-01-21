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
  const [displayLocation, setDisplayLocation] = useState('Monaco')

  return (
    <div className="App">
        <SearchBar onSearch={setWeatherInfo} formattedLocation={setDisplayLocation}/>
        <h1 className="locationBanner"> The weather in {displayLocation} </h1>
        <NextFiveDays location={weatherInfo}/>
        <SunPosition sunData={weatherInfo.current} timeZone={weatherInfo.timezone}/>
    </div>
  );
}

export default App;
