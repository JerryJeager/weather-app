import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import WeatherDetails from "./WeatherDetails";
import NotFound from "./NotFound"


const Home = () => {
    const [geolocation, setGeolocation] = useState({})
    const [temperatureDegree, setTemperatureDegree] = useState('')
    const [weatherText, setWeatherText] = useState('')
    const [countryName, setCountryName] = useState('Nigeria')
    const currentCondition = async (id) => {
        const key = 'svLlAQAAjGVfoE2Vnf4YErr77x7F4kO4'
        const currentConditionBase = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${id}?apikey=${key}`
        const response = await fetch(currentConditionBase + query)
        const data = await response.json()
        return data
    }

    const getWeather = async () => {
        const key = 'svLlAQAAjGVfoE2Vnf4YErr77x7F4kO4'
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        // const apikey = `?apikey=${key}&q=Nsukka`
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setGeolocation({ latitude, longitude })
            })
            const query = `?apikey=${key}&q=${geolocation.latitude},${geolocation.longitude}`
            const response = await fetch(base + query)
            const data = await response.json()
            return data
        }
    }

    useEffect(() => {
        getWeather().then(data => {
            console.log(data)
            setCountryName(data[0].Country.LocalizedName)
            console.log(data[0].Key)
            return currentCondition(data[0].Key)
        }).then(data => {
            setTemperatureDegree(data[0].Temperature.Metric.Value)
            setWeatherText(data[0].WeatherText)
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    if(weatherText !== ''){
        return (
            <div className="home-page" style={{ background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/img/clouds.jpg) center/cover no-repeat fixed" }}>
                <header>
                    <div className="search-btn">
                        <Link to="/Search"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
                    </div>
                    <div className="city-name">
                        <h2>{countryName}</h2>
                    </div>
                </header>
                <WeatherDetails degree={temperatureDegree} weatherText={weatherText} />
                <div className="more-weather-details">
                    <div className="sunrise-and-sunset">
                        <div className="sunrise">
                            <i class="fa-solid fa-sun"></i>
                            <p>Sunrise 06:43</p>
                        </div>
                        <div className="sunset">
                            <i class="fa-solid fa-moon"></i>
                            <p>Sunset 18:43</p>
                        </div>
                    </div>
                    <div className="weather-info">
                        <div className="info1">
                            <h5>Real feel</h5>
                            <p>26<sup>o</sup>C</p>
                            <h5>Chance of rain</h5>
                            <p>25%</p>
                            <h5>Wind speed</h5>
                            <p>15.2Km/h</p>
                        </div>
                        <div className="info2">
                            <h5>Humidity</h5>
                            <p>89%</p>
                            <h5>Pressure</h5>
                            <p>1008mbar</p>
                            <h5>UV index</h5>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className="air-quality-index-detail">
                    <div>
                        <h5>Air Quality Index</h5>
                        <div className="aqi-details">
                            <i class="fa-solid fa-leaf"></i>
                            <p>31</p>
                        </div>
                    </div>
                    <div className="full-aqi-details">
                        <a href="https://www.acuweather.com">Full air quality forecast &gt; </a>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <NotFound/>
    )
}


 
export default Home;