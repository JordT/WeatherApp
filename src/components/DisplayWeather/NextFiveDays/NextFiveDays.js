
const NextFiveDays = (props) => {
    
    const DisplayDay = (weather) => {
        const displayDays = []

        weather.map((d, i) => {
            
            // return console.log(d.day.high)
            return displayDays.push(
                <h2>High: {d.day.high}</h2>
            )
        })
        
        return displayDays
    }

    return (
        <div className="App-header">
            <h1> the weather in {props.location.currentLocation} </h1>
            {DisplayDay(props.location.weather)}
        </div>

    )
}

export default NextFiveDays;