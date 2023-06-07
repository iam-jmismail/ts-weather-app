import { WEATHER_API_KEY } from "@config/*";
import { instances } from "@helpers/api";
import { WeatherEntity } from "@type/*";


export type WeatherInput = string | { lat: string, lng: string }

export class Weather {
    #city: string = "";
    #lat: string = "";
    #lng: string = "";

    constructor(parameter: WeatherInput) {
        if (typeof parameter === 'string') {
            this.#city = parameter
        }
        else {
            this.#lng = parameter.lat
            this.#lat = parameter.lng
        }
    }

    async getWeatherByLatLng() {

        if (this.#lat && this.#lng) {
            const { data } =
                await instances['OPEN_WEATHER'].get<WeatherEntity>(`/weather?lat=${this.#lat}&lon=${this.#lng}&appid=${WEATHER_API_KEY}`)
            return data
        }
        return null;
    }

    async getWeatherByCityName() {
        if (!this.#city) return null;
        const { data } = await instances['OPEN_WEATHER'].get<WeatherEntity>(`/weather?q=${this.#city}&appid=${WEATHER_API_KEY}`)
        return data
    }
}