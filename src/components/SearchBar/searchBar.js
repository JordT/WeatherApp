import axios from 'axios';
import { useState, useCallback } from 'react';

const SearchBar = ({onSearch}) => {

    const [location, setLocation] = useState('Monaco')
    
    // Updates parent App.js state
    const handleUpdate = useCallback( res => {
        onSearch(res)
    }, [onSearch])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // Calling the GCP geocoding API to get lat/lon values.
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GCP_API_KEY}`)
        .then((res) => {
          const lat = res.data.results[0].geometry.location.lat
          const lon = res.data.results[0].geometry.location.lng
          // Taking the GCP values and hitting the OpenWeather API to retreive weather data.
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((res) => {
                console.log(res.data)
                handleUpdate(res.data)
            }) 
            .catch((err) => {
                console.log(err);
            });
        })       
    }

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Enter a city..." id="input-search"
                    onChange={(l) => setLocation(l.target.value)} value={location}>
                </input>
            </form>
        </div>
    )
}

export default SearchBar;