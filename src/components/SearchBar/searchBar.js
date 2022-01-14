import axios from 'axios';
import { useState } from 'react';

const SearchBar = () => {

    const [resData, setResData] = useState([])

    const handleSearch = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=508459cf94bd056fe8b95a12ab1ac1e7`)
        .then((res) => {
          setResData(res.data)
          console.log(res.data)
        })
    }


    return (
        <div className="App-header">
            <h1> This is a search bar</h1>
            <button onClick={handleSearch}></button>
            {resData}
        </div>
    )
}

export default SearchBar;