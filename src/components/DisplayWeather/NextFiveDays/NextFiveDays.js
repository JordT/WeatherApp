import '../../../App.css'

const NextFiveDays = (props) => {
    
    const DisplayDay = (weather) => {

        const displayDays = []

        weather.map((d, i) => {
            displayDays.push(
                <div key={i} className="card">
                    <h2>High: {(d.temp.max-271.35).toFixed(0)}C</h2>
                    <h2>Low: {(d.temp.min-271.35).toFixed(0)}C</h2>
                </div>
            )
        })
        return displayDays.splice(0,5)
    }

    return (
        <div> 
            <h1 className="locationBanner"> the weather in {props.location.timezone} </h1>
            <div className="card-container">
                {DisplayDay(props.location.daily)}
            </div>
        </div>
    )
}

export default NextFiveDays;