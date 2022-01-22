import '../../../App.css'
import '../../formatTime/formatTime'
import formatTime from '../../formatTime/formatTime'
import DisplayCurrent from '../CurrentDayWeather/CurrentDayWeather'

const NextFiveDays = (props) => {


    
    const DisplayDay = (weather) => {

        const displayDays = []
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        weather.map((d, i) => {

            displayDays.push(
                <div key={i} className="card">
                    <p1 className="day-name">{days[new Date(formatTime(d.dt)).getDay()]}</p1><br/>
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
            <h2 className="timeBanner"> Current Time: {formatTime(props.location.current.dt).slice(-13, -8)},  
                Local Time: {formatTime(props.location.current.dt + props.location.timezone_offset).slice(-13, -8)} 
            </h2>
            <div className="card-container">
                <DisplayCurrent currentDay={props.location.current} />
                {/* // {DisplayCurrent(props.location.current)} */}
                {DisplayDay(props.location.daily)}
            </div>
        </div>
    )
}

export default NextFiveDays;