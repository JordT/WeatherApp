import { useState } from 'react';
import './App.css';
import NextFiveDays from './components/DisplayWeather/NextFiveDays/NextFiveDays';
import SearchBar from './components/SearchBar/searchBar';
import defaultweather from './exampleData.json';
import SunPosition from './components/DisplayWeather/SunPosition/SunPosition'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// const { DateTime } = require("luxon");

function App() {
  
  // const defaultweather = './defaultweather.json'
  // We manage state here as we'll get it in SearchBar
  const [weatherInfo, setWeatherInfo] = useState(defaultweather)
  const [displayLocation, setDisplayLocation] = useState('Monaco')

  return (
    <div className="App">
        <SearchBar onSearch={setWeatherInfo} formattedLocation={setDisplayLocation}/>
        <NextFiveDays location={weatherInfo} displayLocation={displayLocation}/>
        <ErrorBoundary>
          <SunPosition sunData={weatherInfo.current} timeZone={weatherInfo.timezone} />
        </ErrorBoundary>
    </div>
  );
}

export default App;
