import { Request, Response } from "express";
import axios from "axios";
import cities from 'cities.json'
require('dotenv').config()

const getWeatherData = (req: Request, res: Response) => {

  let location: string = req.params.location;
  let formattedAddress: string = location
  let lat: string;
  let lon: string;

  for (let j = 0; j < cities.length; j++) {
    if (cities[j].name +', ' + cities[j].country === location) {
      lat = cities[j].lat
      lon = cities[j].lng
      break;
  }}
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    .then(r => {
      const weatherInfo = Object.assign(r.data , {location: formattedAddress})
      res.status(200).json(weatherInfo)
    })
    .catch(err => {
      console.log(err)
    })
}


export = {getWeatherData}