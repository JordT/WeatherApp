import '../../../App.css'

const NextFiveDays = (props) => {

    const kelvinConversion = (temperature, option) => {
      
        if (option === 'f')
            return (((temperature - 273.15) * 1.8 + 32).toFixed(0))
        
        if (option === 'c')
            return ((temperature - 273.15).toFixed(0))

        else
            return ('kelvinConversion: Error invalid option: "' + option + '"')
    }
    
    const DisplayDay = (weather) => {

        const displayDays = []

        weather.map((d, i) => {
            displayDays.push(
                <div key={i} className="card">
                    <h2>High: {(d.temp.max-273.15).toFixed(0)}C</h2>
                    <h2>Low: {(d.temp.min-273.15).toFixed(0)}C</h2>
                    <h2>mid: {kelvinConversion(d.temp.max, 'v')}C</h2>
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