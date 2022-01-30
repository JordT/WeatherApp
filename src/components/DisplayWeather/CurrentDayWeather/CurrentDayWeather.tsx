import './CurrentDayWeather.css'

type Props = {
    currentDay: any,
    currentWeather: any,
}

const DisplayCurrent = (props: Props): JSX.Element => {

    return (
        <div className="current-weather-container">
            <div key='current' className="current-card">
                    <div className="current-weather1">
                        <h3 className="current-heading">Current Weather</h3>
                        <img
                            className="weather-icon"
                            src={`http://openweathermap.org/img/wn/${props.currentDay.weather[0].icon}@2x.png`}                   
                            alt="new"
                        />
                        <p className="current-heading">{props.currentDay.weather[0].description}</p><br/>
                    </div>
                    <div className="current-weather">
                            <p className="measurementTitle">Temperature </p>
                            <p className="measurementValue">{props.currentDay.temp.toFixed(0)}C</p>
                            <p className="measurementTitle">Feels like</p>
                            <p className="measurementValue">{props.currentDay.feels_like.toFixed(0)}C</p>
                    </div>
                    {/* Boxing this div for now since its already there in the forecast. */}
                    {/* <div className="current-weather">
                            <p>Max</p>
                            <h3>{props.currentWeather.temp.max.toFixed(0)}C</h3>
                            <p>Min</p>
                            <h3>{props.currentWeather.temp.min.toFixed(0)}C</h3>
                    </div> */}
                    <div className="current-weather">
                            <p className="measurementTitle">Windspeed</p>
                            <p className="measurementValue">{props.currentWeather.wind_speed.toFixed(0)}mph</p>
                            <p className="measurementTitle">Windspeed</p>
                            <p className="measurementValue">{props.currentWeather.wind_gust.toFixed(0)}mph</p>
                    </div>
                    <div className="current-weather">
                            <p className="measurementTitle">Wind direction</p>
                            <p className="measurementValue">{props.currentWeather.wind_deg}°</p>
                            <p className="measurementTitle">Humidity</p>
                            <p className="measurementValue">{props.currentWeather.humidity}%</p>
                    </div>
            </div>
        </div>  
    )
}


export default DisplayCurrent