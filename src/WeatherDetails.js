import { Link } from "react-router-dom";



const WeatherDetails = (props) => {

    let temperature = props.temperature
    let weatherText = props.weatherText
    let tomorrowTemp = props.tomorrowTemp
    let tomorrowWeatherText = props.tomorrowWeatherText
    let todayIcon = props.todayIcon
    let tomorrowIcon = props.tomorrowIcon
    let nextTomorrowTemp = props.nextTomorrowTemp
    let nextTomorrowWeatherText = props.nextTomorrowWeatherText
    let nextTomorrowIcon = props.nextTomorrowIcon
    let nextTomorrowDate = props.nextTomorrowDate
    
    return ( 
        <div className="weather-details">
            <div className="location-weather">
                <div className="temperature">
                    <div className="value">
                        <h1>{temperature}</h1>
                    </div>
                    <div className="degree">
                        <p><sup>o</sup>C</p>
                    </div>
                </div>
                <p>{weatherText}</p>
                <div className="aqi">
                    <i class="fa-solid fa-leaf"></i>
                    <p>AQI 26</p>
                </div>
            </div>
            <div className="forecast-details">
                <div className="three-day-forecast">
                    <div className="today">
                        <div className="today-weather">
                            <img src={todayIcon} alt="" />
                            <p>Today<sup>.</sup>{weatherText}</p>
                        </div>
                        <div className="today-temperature">
                            <p>{temperature}<sup>o</sup> / 22<sup>o</sup></p>
                        </div>
                    </div>
                    <div className="tomorrow"> 
                        <div className="tomorrow-weather">
                            <img src={tomorrowIcon} alt="" />
                            <p>Tomorrow<sup>.</sup>{tomorrowWeatherText}</p>
                        </div>
                        <div className="tomorrow-temperature">
                            <p>{tomorrowTemp}<sup>o</sup> / 22<sup>o</sup></p>
                        </div>
                    </div>
                    <div className="next-tomorrow">
                        <div className="next-tomorrow-weather">
                            <img src={nextTomorrowIcon} alt="" />
                            <p>{nextTomorrowDate}<sup>.</sup>{nextTomorrowWeatherText}</p>
                        </div>
                        <div className="next-tomorrow-temperature">
                            <p>{nextTomorrowTemp}<sup>o</sup> / 22<sup>o</sup></p>
                        </div>
                    </div>
                </div>
                {/* 5-day-forecast */}
                <Link to="/DayForecast">
                    <div className="five-day-forecast">
                        5-day forecast
                    </div>
                </Link>
                {/* hourly forecast */}
                <div className="hourly-forecast">

                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;