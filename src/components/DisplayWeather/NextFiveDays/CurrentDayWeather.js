
const DisplayCurrent = (props) => {


    return (
        <div key='current' id="current-card" className="card">
                <p1 className="day-name">Current</p1><br/>
                <p1>{props.currentDay.weather[0].description}</p1><br/>
                <img
                className="weather-icon" 
                src={`http://openweathermap.org/img/wn/${props.currentDay.weather[0].icon}@2x.png`}                   
                alt="new"
                /><br/>
                <p1>{props.currentDay.temp.toFixed(0)}C</p1>
        </div>
    )
}


export default DisplayCurrent