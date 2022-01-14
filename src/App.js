import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar.js';


function App() {
  // We manage state here as we'll get it in SearchBar
  const [location, setLocation] = useState({currentLocation: "Monaco"})

  return (
    <div className="App">
        <SearchBar />
        {/* <DisplayWeather props={state}/> */}
    </div>
  );
}

export default App;
