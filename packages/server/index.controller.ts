import { Request, Response } from "express";
import axios from "axios";
require('dotenv').config()

const getWeatherData = (req: Request, res: Response) => {

  let location: string = req.params.location
  let formattedAddress: string = location
  let lat: string = req.params.lat
  let lon: string = req.params.lon
    
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