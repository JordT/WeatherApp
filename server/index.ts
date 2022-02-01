import express, { Request, Response } from "express";
import controller from './index.controller'

const app = express()
const port = 4000

app.get('/api/geocode', controller.getCoordinatesFromLocation)

app.get('/api/weather', controller.getWeatherData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})