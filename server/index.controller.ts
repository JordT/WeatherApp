import { Request, Response } from "express";
import { json } from "stream/consumers";

const getCoordinatesFromLocation = (location: string): number[] => {
  
  let lat: number;
  let lon: number;

  return [lat, lon]

}

const getWeatherData = (lat: number, lon: number): JSON => {


  return JSON
}


module.exports = {getCoordinatesFromLocation, getWeatherData}