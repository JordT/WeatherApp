import './CurrentDayWeather.css'

const DisplayCurrent = (props) => {

    return (
        <div className="current-weather-card">
            <div key='current' id="current-card" className="current-card">
                    <div className="current-weather">
                        <h3 className="p1">Current Weather</h3><br/>
                        <img
                            className="weather-icon" 
                            src={`http://openweathermap.org/img/wn/${props.currentDay.weather[0].icon}@2x.png`}                   
                            alt="new"
                        /><br/>
                        <p className="p1">{props.currentDay.weather[0].description}</p><br/>
                    </div>
                    <div className="current-weather">
                            <p>Temperature </p>
                            <h3>{props.currentDay.temp.toFixed(0)}c</h3>
                            <p>Feels like</p>
                            <h3>{props.currentDay.feels_like.toFixed(0)}c</h3>
                    </div>
                    <div className="current-weather">
                            <p>Max</p>
                            <h3>{props.currentWeather.temp.max.toFixed(0)}c</h3>
                            <p>Min</p>
                            <h3>{props.currentWeather.temp.min.toFixed(0)}c</h3>
                    </div>
                    <div className="current-weather">
                            <p>Windspeed</p>
                            <h3>{props.currentWeather.wind_speed.toFixed(0)}mph</h3>
                            <p>Windspeed</p>
                            <h3>{props.currentWeather.wind_gust.toFixed(0)}mph</h3>
                    </div>
                    <div className="current-weather">
                            <p>Wind direction</p>
                            <h3>{props.currentWeather.wind_deg}d</h3>
                            <p>Humidity</p>
                            <h3>{props.currentWeather.humidity}%</h3>
                    </div>
            </div>
        </div>  
    )
}


export default DisplayCurrent