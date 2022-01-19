import '../../../App.css'
import '../../formatTime/formatTime'
import formatTime from '../../formatTime/formatTime'

const NextFiveDays = (props) => {

    const DisplayCurrent = (weather) => {
        
        return (
            <div key='current' id="current-card" className="card">
                <h2>Current:</h2>
                <h2>{weather.temp.toFixed(0)}C</h2>
            </div>
        )
    }
    
    const DisplayDay = (weather) => {

        const displayDays = []

        weather.map((d, i) => {
            displayDays.push(
                <div key={i} className="card">
                    <p1>{d.weather[0].description}</p1><br/>
                    <img 
                    src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}                   
                    alt="new"
                    />
                    <p1>Low: {d.temp.max.toFixed(0)}C</p1><br/>
                    <p1>High: {d.temp.min.toFixed(0)}C</p1>
                </div>
            )
        })
        return displayDays.splice(0,5)
    }

    return (
        <div> 
            <h1 className="locationBanner"> The weather in {props.location.timezone} </h1>
            <h2 className="locationBanner"> Current Time: {formatTime(props.location.current.dt)},  
                Local Time: {formatTime(props.location.current.dt + props.location.timezone_offset)} 
            </h2>
            <div className="card-container">
                {DisplayCurrent(props.location.current)}
                {DisplayDay(props.location.daily)}
            </div>
        </div>
    )
}

export default NextFiveDays;