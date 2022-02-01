import express from "express";
import controller from './index.controller'

const app = express()
const port = 4000
const cors = require("cors");

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/api/weather/:location', controller.getWeatherData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})