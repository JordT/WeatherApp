import './SunPosition.css'

const SunPosition = (sunData) => {
//   console.log(sunData.sunrise)

// define 12 positions?
const sunPos = (x) => {
  switch(x) {
    case 1:
      //
  }
}

return (
    //   <h1>{sunData}</h1>
      <div className="sun-pos-container">
         <div className="arc">
           <div className="sun-container"
            style={{
              left: '95%', // change these to move sun pos
              top: '85%'  // change these to move sun pos
              }}>
              <div className="sun"></div> 
           </div>
        </div>
         {/* <h1>SunPosition</h1> */}
      </div>

  )
}

export default SunPosition;