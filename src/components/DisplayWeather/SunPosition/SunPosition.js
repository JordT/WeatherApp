import './SunPosition.css'

const SunPosition = (sunData) => {

// get Sun position from sunrise + sundown information, then get that to 1-9 figure, pass that into sunPos

// define 12 positions?
let leftPos = 0;
let topPos = 0;

const sunPos = (x) => {
  switch(x) {
    case 1:
      leftPos = -7.5;
      topPos = 80;
      break;
    case 2:
      leftPos = -6;
      topPos = 60;
      break;
    case 3:
      leftPos = 5;
      topPos = 20;
      break;
    case 4:
      leftPos = 20;
      topPos = -5;
      break;
    case 5:
      leftPos = 44;
      topPos = -15;
      break;
    case 6:
      leftPos = 64;
      topPos = -5;
      break;
    case 7:
      leftPos = 80;
      topPos = 20;
      break;
    case 8:
      leftPos = 91;
      topPos = 60;
      break;
    case 9:
      leftPos = 93;
      topPos = 80;
      break;
  }
}
sunPos(8)
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
         {/* <h1>SunPosition</h1> */}
      </div>

  )
}

export default SunPosition;