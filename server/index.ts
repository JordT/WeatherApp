import express, { Request, Response } from "express";
import {getCoordinatesFromLocation, getWeatherData} from "./index.controller"

const app = express()
const port = 4000

app.get('/api/geocode', (req: Request, res: Response) => {
  res.send('geocode')
})

app.get('/api/weather', (req: Request, res: Response) => {
    res.send('weather')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})