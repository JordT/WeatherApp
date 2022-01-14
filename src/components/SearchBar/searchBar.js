import axios from 'axios';
import { useState, useEffect } from 'react';

const SearchBar = () => {

    const [resData, setResData] = useState([])
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()
    const [location, setLocation] = useState('Monaco')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA3mAQaQEIWHzmo5vMI6qIoCYAUUjLeAE4`)
        .then((res) => {
            console.log('google fired')
          setLat(res.data.results[0].geometry.location.lat)
          setLon(res.data.results[0].geometry.location.lng)
        })
  
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=508459cf94bd056fe8b95a12ab1ac1e7`)
        .then((res) => {
            console.log('openweather api firing')
            // toFixed rounds the number to specified floating point value. 
            // -273.15 is the formula for the Kelvin to Celcius conversion.
            setResData((res.data.current.temp-273.15).toFixed(0)) 
            console.log(res.data)
        }) 
    }

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Enter a city..." id="input-search"
                    onChange={(l) => setLocation(l.target.value)} value={location}>
                </input>
                <button type="submit" id="submit-search" > Search </button>
            </form>
            Current temperature: {resData}C
        </div>
    )
}

export default SearchBar;