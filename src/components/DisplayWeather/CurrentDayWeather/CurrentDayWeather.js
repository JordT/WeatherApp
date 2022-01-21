import './CurrentDayWeather.css'

const DisplayCurrent = (props) => {

    // loop through weather to display next 5 hours?

    return (
        <div className="current-weather-card">
            <div key='current' id="current-card" className="current-card">
                    <div className="current-weather">
                        <p1 className="day-name">Current</p1><br/>
                        <p1>{props.currentDay.weather[0].description}</p1><br/>
                        <img
                            className="weather-icon" 
                            src={`http://openweathermap.org/img/wn/${props.currentDay.weather[0].icon}@2x.png`}                   
                            alt="new"
                        /><br/>
                        <p className="current-temperature">{props.currentDay.temp.toFixed(0)}C</p>
                    </div>
                    <div className="weather-by-hour">
                            <p>test</p>
                    </div>
                    <div className="weather-by-hour">
                            <p>test</p>
                    </div>
            </div>
        </div>  
    )
}


export default DisplayCurrent