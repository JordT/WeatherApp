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
        axios.get(`http://localhost:4000/api/weather/Monaco`)
        .then(res => {
            handleUpdate(res.data)
            console.log(res)
        }) 
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
        
        let found: boolean = false;
        let lat: string;
        let lon: string;
        // Attempting to check if the location submitted matches the data in the example JSON.
        // If there is a match, then exit the loop, and assign 'found' to true.
        for (let j = 0; j < cities.length; j++){
            if (cities[j].name +', ' + cities[j].country === location) {
                found = true;
                lat = cities[j].lat;
                lon = cities[j].lng;
                console.log(lat + ' ' + lon)
                break;
        }}

        // If 'found' is true, then call the API with the location data submitted.
        if (found) {
            axios.get(`http://localhost:4000/api/weather/${location}`)
            .then(res => {
                handleUpdate(res.data)
                setDisplayLocation(res.data.location)
                console.log(res)
            }) 
        }

        // If 'found' is false, then do not call the API, and alert the user that they need to re-submit
        if (!found) {
            alert('Please choose a location from the drop-down menu.')
        }
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