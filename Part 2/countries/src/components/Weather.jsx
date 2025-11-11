import { useState, useEffect } from "react";
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY

    useEffect(() => {
        if (capital) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Error detching weather:', error)
                })
        }
    }, [capital, api_key])

    if (!weather) {
        return <div>Loading weather...</div>
    }

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <div>Temperature {weather.main.temp} Celcius</div>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <div>Wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather