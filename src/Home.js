import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import WeatherDetails from "./WeatherDetails";


const Home = () => {

    const key = "d793d287c872495ab2530755230503"
    const base = "https://api.weatherapi.com/v1/forecast.json"
    let query = ''
    let request = ''
    
    const [geoLocation, setGeoLocation] = useState({})
    const [location, setLocation] = useState('')
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
    const [nextTomorrowDate, setNextTomorrowDate]  = useState('')
    

    const [day, setDay] = useState('')

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
    

    const getGeoLocation = () => {
        // if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setGeoLocation({ latitude, longitude })
                query = `?key=${key}&q=${latitude},${longitude}&days=5`
                
                request = base + query

                fetch(request)
                    .then(res => {
                        if (!res.ok) {
                            throw Error("Could not fetch the data for that resource");
                        }
                        return res.json();
                    })
                    .then(data => {
                        setTemperature(data.current.temp_c)
                        setWeatherText(data.current.condition.text)
                        setLocation(data.location.name)
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
                        getDayName(dayOfWeek.getDay)
                        setNextTomorrowDate(day)

                        console.log(data);

                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
    };

    useEffect(() => {
        getGeoLocation();
    }, []);

    return (
        <div className="home-page" style={{ background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/img/clouds.jpg) center/cover no-repeat fixed" }}>
            <header>
                <div className="search-btn">
                    <Link to="/Search"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
                </div>
                <div className="city-name">
                    <h2>{location}</h2>
                </div>
            </header>
            <WeatherDetails 
               temperature={temperature} 
               weatherText={weatherText}  
               tomorrowTemp={tomorrowTemp} 
               tomorrowWeatherText={tomorrowWeatherText} 
               todayIcon={todayIcon} 
               tomorrowIcon={tomorrowIcon} 
               nextTomorrowDate={nextTomorrowDate} 
               nextTomorrowIcon={nextTomorrowIcon} 
               nextTomorrowTemp={nextTomorrowTemp} 
               nextTomorrowWeatherText={nextTomorrowWeatherText}
            />

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



export default Home;