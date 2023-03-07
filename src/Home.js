import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import WeatherDetails from "./WeatherDetails";
import HourlyForecast from "./HourlyForecast";

import useFetch from "./useFetch";


export const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        return { latitude, longitude }
    })
}

const Home = () => {

    const { weatherData: data } = useFetch(3)


    const [locationName, setLocationName] = useState('')
    const [locationRegion, setLocationRegion] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weatherText, setWeatherText] = useState('')
    const [pressure, setPressure] = useState('')
    const [humidity, setHumidity] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [realFeal, setRealFeal] = useState('')
    const [uvIndex, setUvIndex] = useState('')
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [rainChance, setRainChance] = useState('')
    const [todayIcon, setTodayIcon] = useState('')

    // tomorrow
    const [tomorrowTemp, setTomorrowTemp] = useState('')
    const [tomorrowWeatherText, setTomorrowWeatherText] = useState('')
    const [tomorrowIcon, setTomorrowIcon] = useState('')

    // next tomorrow
    const [nextTomorrowTemp, setNextTomorrowTemp] = useState('')
    const [nextTomorrowWeatherText, setNextTomorrowWeatherText] = useState('')
    const [nextTomorrowIcon, setNextTomorrowIcon] = useState('')
    const [day, setDay] = useState('')

    // Hourly forecast
    const [hours, setHours] = useState('')

    // background style
    const [bg, setBg] = useState({})

    const getDayName = (d) => {
        switch (d) {
            case 0:
                setDay('Sunday')
                break;
            case 1:
                setDay('Monday')
                break;
            case 2:
                setDay('Tuesday')
                break;
            case 3:
                setDay('Wednesday')
                break;
            case 4:
                setDay('Thursday')
                break;
            case 5:
                setDay('Friday')
                break;
            case 6:
                setDay('Saturday')
                break;
        }
    }


    useEffect(() => {

        if (data) {
            // console.log(data)

            setTemperature(data.current.temp_c)
            setWeatherText(data.current.condition.text)
            setLocationName(data.location.name)
            setLocationRegion(data.location.region)
            setHumidity(data.current.humidity)
            setPressure(data.current.pressure_mb)
            setWindSpeed(data.current.wind_kph)
            setUvIndex(data.current.uv)
            setRealFeal(data.current.feelslike_c)
            setSunrise(data.forecast.forecastday[0].astro.sunrise)
            setSunset(data.forecast.forecastday[0].astro.sunset)
            setRainChance(data.forecast.forecastday[0].day.daily_chance_of_rain)
            setTodayIcon(data.current.condition.icon)

            // tomorrow
            setTomorrowTemp(data.forecast.forecastday[1].day.avgtemp_c)
            setTomorrowWeatherText(data.forecast.forecastday[1].day.condition.text)
            setTomorrowIcon(data.forecast.forecastday[1].day.condition.icon)

            // nextTomorrow
            setNextTomorrowTemp(data.forecast.forecastday[2].day.avgtemp_c)
            setNextTomorrowWeatherText(data.forecast.forecastday[2].day.condition.text)
            setNextTomorrowIcon(data.forecast.forecastday[2].day.condition.icon)
            const dayOfWeek = new Date(`${data.forecast.forecastday[2].date}`)
            const dayValue = dayOfWeek.getDay()
            getDayName(dayValue)

            // hourly forecast
            setHours(data.forecast.forecastday[0].hour)

            // background style
            data.current.is_day === 0 ? setBg({ background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/img/stars.jpg) center/cover no-repeat fixed" }) : setBg({ background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/img/clouds.jpg) center/cover no-repeat fixed" })


        }

    }, [data])

    return (
        <div className="home-page" style={bg}>
            {!temperature && <div className="bouncer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>}
            {temperature &&
                <div>
                    <header>
                        <div className="search-btn">
                            <Link to="/Search"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
                        </div>
                        <div className="city-name">
                            <h2>{locationName}, {locationRegion}</h2>
                        </div>
                    </header>
                    <WeatherDetails
                        temperature={temperature}
                        weatherText={weatherText}
                        tomorrowTemp={tomorrowTemp}
                        tomorrowWeatherText={tomorrowWeatherText}
                        todayIcon={todayIcon}
                        tomorrowIcon={tomorrowIcon}
                        nextTomorrowDate={day}
                        nextTomorrowIcon={nextTomorrowIcon}
                        nextTomorrowTemp={nextTomorrowTemp}
                        nextTomorrowWeatherText={nextTomorrowWeatherText}
                    />

                    <HourlyForecast hours={hours} />

                    <div className="more-weather-details">
                        <div className="sunrise-and-sunset">
                            <div className="sunrise">
                                <i class="fa-solid fa-sun"></i>
                                <p>Sunrise {sunrise}</p>
                            </div>
                            <div className="sunset">
                                <i class="fa-solid fa-moon"></i>
                                <p>Sunset {sunset}</p>
                            </div>
                        </div>
                        <div className="weather-info">
                            <div className="info1">
                                <h5>Real feel</h5>
                                <p>{realFeal}<sup>o</sup>C</p>
                                <h5>Chance of rain</h5>
                                <p>{rainChance}%</p>
                                <h5>Wind speed</h5>
                                <p>{windSpeed}Km/h</p>
                            </div>
                            <div className="info2">
                                <h5>Humidity</h5>
                                <p>{humidity}%</p>
                                <h5>Pressure</h5>
                                <p>{pressure}mbar</p>
                                <h5>UV index</h5>
                                <p>{uvIndex}</p>
                            </div>
                        </div>
                    </div>
                    <div className="air-quality-index-detail">
                        <div>
                            <h5>Air Quality Index</h5>
                            <div className="aqi-details">
                                <i class="fa-solid fa-leaf"></i>
                                <p>26</p>
                            </div>
                        </div>
                        <div className="full-aqi-details">
                            <a href="https://www.acuweather.com">Full air quality forecast &gt; </a>
                        </div>
                    </div>
                </div>
            }

        </div>
    )

}


export default Home;