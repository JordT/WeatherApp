import '../../../App.css'
import DisplayCurrent from '../CurrentDayWeather/CurrentDayWeather'
const { DateTime } = require("luxon");

const NextFiveDays = (props) => {

    const DisplayDay = (weather) => {

        const displayDays = []

        weather.map((d, i) => {

            let currentDay = DateTime.fromSeconds(d.dt).setZone(d.timezone).toFormat('cccc')

            displayDays.push(
                <div key={i} className="card">
                    <p1 className="day-name">{currentDay}</p1><br/>
                    <p1>{d.weather[0].description}</p1><br/>
                    <img
                    className="weather-icon" 
                    src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}                   
                    alt="new"
                    /><br/>
                    <p1>High: {d.temp.max.toFixed(0)}C</p1><br/>
                    <p1>Low: {d.temp.min.toFixed(0)}C</p1>
                </div>
            )
        })
        return displayDays.splice(0,5)
    }

    return (
        <div> 
            <h1 className="locationBanner"> The local time in {props.displayLocation} is {(props.location.current.dt)} </h1>
            <div className="card-container">
                <DisplayCurrent currentDay={props.location.current} currentWeather={props.location.daily[0]} />
                {DisplayDay(props.location.daily)}
            </div>
        </div>
    )
}

export default NextFiveDays;