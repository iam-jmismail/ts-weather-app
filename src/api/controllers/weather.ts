
import { NextFunction, Request, Response } from "express";
import { instances } from '@helpers/api/index'
import { WeatherEntity, WeatherRequest } from "@type/";
import { NotFoundError, ValidationError } from "@helpers/error-Handler";
import { Weather } from "@helpers/weather";


export const getCurrentWeather = async (req: WeatherRequest, res: Response, next: NextFunction) => {

    const { query: { lat_lng, city, language, units }, user: { location } } = req;

    try {


        // Location 
        const query_loc = lat_lng
            ? lat_lng.trim().split(",").map(o => Number(o.trim())) : null;
        const user_loc = location && location.lat && location.lng ? [location.lat, location.lng] : null
        const weather_loc = query_loc ?? user_loc
        if (!weather_loc && !city) throw new ValidationError(null, 'Please provide lat/lng or city')

        const weather_parameter = city ? city : {lat: String(weather_loc![0]), lng : String(weather_loc![1]) }
        const weather = new Weather(weather_parameter)
        const data = city ? await weather.getWeatherByCityName() : await weather.getWeatherByLatLng()
       
        if(!data) throw new NotFoundError('Location not found ')
       
        return res.status(200).sendSuccessResponse(data, 'success')
    } catch (error) {
        console.log("error", error)
        return next(error)
    }
}