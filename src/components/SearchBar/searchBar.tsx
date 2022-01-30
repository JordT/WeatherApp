// https://github.com/lutangar/cities.json

//https://stackoverflow.com/questions/53498663/displaying-data-from-json-as-suggestions-under-a-searchbar-in-reactjs

import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import cities from 'cities.json';
import './searchBar.css'

type Props = {
    onSearch: any,
    formattedLocation: any,
}
const SearchBar = ({onSearch, formattedLocation}: Props) => {

    const [location, setLocation] = useState<string>('Monaco')
    const [suggestedLocations, setSuggestedLocations] = useState<string[]>([cities[1000].name])
    
    // Loads Monaco weather on page load.
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.7384&lon=7.4246&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((res) => {
                console.log(res.data)
                handleUpdate(res.data)
            }) 
            .catch((err) => {
                console.log(err);
        });
    }, [])

    // Updates parent App.js state
    const handleUpdate = useCallback( res => {
        onSearch(res)  
    }, [onSearch])

    const setDisplayLocation = useCallback((res) => {
       formattedLocation(res)
    }, [formattedLocation])


    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Calling the GCP geocoding API to get lat/lon values.
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GCP_API_KEY}`)
        .then((res) => {
            setDisplayLocation(res.data.results[0].formatted_address)
            const lat = res.data.results[0].geometry.location.lat
            const lon = res.data.results[0].geometry.location.lng
            // Taking the GCP values and hitting the OpenWeather API to retreive weather data.
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((res) => {
                handleUpdate(res.data)
            }) 
            .catch((err) => {
                console.log(err);
            });
        })       
    }

    const setSuggestions = (loc: string) => {
        let suggestions: string[] = []
        for (let j = 0; j < cities.length; j++){
            let x = cities[j].name
            let minSlice: number;
            if (loc.length < 3) {
                minSlice = 3
            } else {
                minSlice = loc.length;
            } 

            if (x.slice(0, minSlice).toLowerCase() === loc.toLowerCase()) {
                suggestions.push(cities[j].name +  ', ' + cities[j].country)
            }
        }

        setSuggestedLocations([...new Set(suggestions)].splice(0,5))
        
    }

    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}> 
                <input 
                    list="suggestedLocations"
                    placeholder="Enter a city..." 
                    id="input-search"
                    value={location}
                    onChange={(l) => {setLocation(l.target.value); setSuggestions(l.target.value)}}
                    autoComplete="off"
                    >
                </input>
                <datalist id="suggestedLocations">  
                    {suggestedLocations.map((x, i)=><option key={i} value={x}/>)}                  
                </datalist>
            </form>
        </div>
    )
}

export default SearchBar;