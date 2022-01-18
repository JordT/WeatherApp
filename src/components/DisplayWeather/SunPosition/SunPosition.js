import './SunPosition.css'

const SunPosition = (sunData) => {
//   console.log(sunData.sunrise)
  return (
    //   <h1>{sunData}</h1>
      <div className="sun-pos-container">
         <div className="arc"></div>
         <div className="position"></div>
         {/* <h1>SunPosition</h1> */}
      </div>

  )
}

export default SunPosition;