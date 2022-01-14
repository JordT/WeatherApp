import axios from 'axios';
import { useState } from 'react';

const SearchBar = () => {

    const [resData, setResData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=508459cf94bd056fe8b95a12ab1ac1e7`)
        .then((res) => {
            // toFixed rounds the number to specified floating point value. 
            // -273.15 is the formula for the Kelvin to Celcius conversion.
            setResData((res.data.current.temp-273.15).toFixed(0)) 
            console.log(res.data)
        }) 
    }


    return (
        <div className="App-header">
            <form onSubmit={handleSubmit}> 
                <input placeholder="Enter a city..." id="input-search"></input>
                <button type="submit" id="submit-search" > Search </button>
            </form>
            Current temperature: {resData} C
        </div>
    )
}

export default SearchBar;