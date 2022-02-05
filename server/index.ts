import express from "express";
import controller from './index.controller'
import cors from 'cors';

const app = express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/api/weather/:location', controller.getWeatherData)

export default app;