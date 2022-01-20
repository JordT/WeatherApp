import './SunPosition.css'

const SunPosition = (props) => {

const { DateTime } = require("luxon");

let sunrise = DateTime.fromSeconds(props.sunData.sunrise)
let sunset = DateTime.fromSeconds(props.sunData.sunset)
let currentDT = DateTime.now()

// get difference between sunrise/sunset
let hoursOfLight = sunset.hour - sunrise.hour

// get currenttime as a % of total hours of light
let percTime = ((currentDT.hour / 24) * 10).toFixed(0)
// it would be better to reflect % of current availabl light via hoursOfLight

// define 9 positions
let leftPos = 0;
let topPos = 0;
switch(percTime) {
  case '1':
    leftPos = -7.5;
    topPos = 80;
    break;
  case '2':
    leftPos = -6;
    topPos = 60;
    break;
  case '3':
    leftPos = 5;
    topPos = 20;
    break;
  case '4':
    leftPos = 20;
    topPos = -5;
    break;
  case '5':
    leftPos = 44;
    topPos = -15;
    break;
  case '6':
    leftPos = 64;
    topPos = -5;
    break;
  case '7':
    leftPos = 80;
    topPos = 20;
    break;
  case '8':
    leftPos = 91;
    topPos = 60;
    break;
  case '9':
    leftPos = 93;
    topPos = 80;
    break;
}

return (
    //   <h1>{sunData}</h1>
      <div className="sun-pos-container">
         <div className="arc">
           <div className="sun-container"
            style={{
              left: `${leftPos}%`, // change these to move sun pos
              top: `${topPos}%`  // change these to move sun pos
              }}>
              <div className="sun"></div> 
           </div>
        </div>
      </div>

  )
}

export default SunPosition;