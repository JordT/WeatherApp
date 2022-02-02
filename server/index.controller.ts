import { Request, response, Response } from "express";
import axios from "axios";

require('dotenv').config()

const getWeatherData = (req: Request, res: Response) => {

  let location: string = req.params.location;
  let formattedAddress: string;
  let lat: number;
  let lon: number;
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GCP_API_KEY}`)
  .then(r => {
    lat = r.data.results[0].geometry.location.lat
    lon = r.data.results[0].geometry.location.lng
    formattedAddress = r.data.results[0].formatted_address;
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    .then(r => {
      res.status(200).json(r.data)
    })
    .catch(err => {
      console.log(err)
    })
  }).catch(err => {
    console.log(err)
  })
}


export = {getWeatherData}