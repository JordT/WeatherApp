import './SunPosition.css'

  //TODO - JSON response coming in with nested data needs a type... 
  const SunPosition = (props: any) => {
  if (props.sunData.sunrise){
    const { DateTime } = require("luxon");
    
    const sunrise = DateTime.fromSeconds(props.sunData.sunrise).setZone(props.timeZone)
    const sunset = DateTime.fromSeconds(props.sunData.sunset).setZone(props.timeZone)
    const currentDT = DateTime.now().setZone(props.timeZone) // localtime


    // calculate sun position based on time since sunrise...
    const hoursOfLight = sunset.hour - sunrise.hour
    const currentTime = currentDT.hour - sunrise.hour
    const sunPos = ((currentTime / hoursOfLight) * 10).toFixed(0)


    // define 9 positions
    let leftPos: number = 0; 
    let topPos: number  = 0;
    switch(sunPos) {

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

      default:
        leftPos = 10000
        topPos = 10000;
        break;
    }

    return (
          <div className="sun-pos-container">
            <div className="suntime" id="sunrise-time">{sunrise.toFormat('HH:mm')} </div>
            <div className="suntime" id="sunset-time">{sunset.toFormat('HH:mm')} </div>                
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
  } else {
    return (<p>Woops... soemthing went wrong</p>)
  }

}

export default SunPosition;