import { useState, useEffect } from "react"


const useFetch = (forecastDays, baseName = 'forecast.json') => {
    const key = "d793d287c872495ab2530755230503"
    const base = `https://api.weatherapi.com/v1/${baseName}`
    let query = ''
    let request = ''
    const [geoLocation, setGeoLocation] = useState({})
    const [weatherData, setWeatherData] = useState(null)
    const [fiveDayForecast, setFiveDayForecast] = useState(null)

    useEffect(() => {
        // setTimeout(() => {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setGeoLocation({ latitude, longitude })
                query = `?key=${key}&q=${latitude},${longitude}&days=${forecastDays}`

                request = base + query

                fetch(request)
                    .then(res => {
                        if (!res.ok) {
                            throw Error("Could not fetch the data for that resource");
                        }
                        return res.json();
                    })
                    .then(data => {
                        console.log(data)
                        setWeatherData(data)
                        setFiveDayForecast(data.forecast.forecastday)
                    })
                    .catch(err => {
                        console.log(err);
                    });
                return { weatherData, forecastDays }
            })

        // }, 2000)
       
    }, [])

    

    return { weatherData, fiveDayForecast }


}

    export default useFetch