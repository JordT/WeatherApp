import '../../../App.css'

const NextFiveDays = (props) => {
    
    const DisplayDay = (weather) => {

        const displayDays = []

        weather.map((d, i) => {
            displayDays.push(
                <div key={i} className="card">
                    <h2>High: {d.day.high}c</h2>
                    <h2>Low: {d.day.low}c</h2>
                </div>
            )
        })
        return displayDays
    }

    return (
        <div> 
            <h1 className="locationBanner"> the weather in {props.location.currentLocation} </h1>
            <div className="card-container">
                {DisplayDay(props.location.weather)}
            </div>
        </div>
    )
}

export default NextFiveDays;