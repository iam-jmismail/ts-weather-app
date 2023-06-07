import axios, { AxiosInstance } from 'axios'

const OPEN_WEATHER : AxiosInstance= axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5/',
})

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API%20key}

export const instances = {
    OPEN_WEATHER,
} as const

export type InstanceName = keyof typeof instances