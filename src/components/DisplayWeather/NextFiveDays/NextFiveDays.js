import '../../../App.css'

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
                    <h2>Min: {d.temp.max.toFixed(0)}C</h2>
                    <h2>Max: {d.temp.min.toFixed(0)}C</h2>
                </div>
            )
        })
        return displayDays.splice(0,6)
    }

    return (
        <div> 
            <h1 className="locationBanner"> the weather in {props.location.timezone} </h1>
            <div className="card-container">
                {DisplayCurrent(props.location.current)}
                {DisplayDay(props.location.daily)}
            </div>
        </div>
    )
}

export default NextFiveDays;