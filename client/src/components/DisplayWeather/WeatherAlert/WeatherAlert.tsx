import "./WeatherAlert.css";
import { useState } from "react";

const WeatherAlert = (props: any) => {
  
  const mapAlerts = (alerts: any) => {
    const displayAlerts: any = []
        
        alerts.map((a: any, i: any) => {
            displayAlerts.push(
                <div key={i}>{a[i].description} re</div>
            )
        })
    
    return displayAlerts
  }  

  return <div className="weather-alert-container">{mapAlerts(Array.from(props))}</div>;
};

export default WeatherAlert;
