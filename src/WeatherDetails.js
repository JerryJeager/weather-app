import { Link } from "react-router-dom";



const WeatherDetails = (props) => {
    const temperatureDegree = props.degree
    const weatherText = props.weatherText
    console.log(props)
    return ( 
        <div className="weather-details">
            <div className="location-weather">
                <div className="temperature">
                    <div className="value">
                        <h1>{temperatureDegree}</h1>
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
                    <div className="yesterday">
                        <div className="yesterday-weather">
                            <i class="fa-solid fa-moon"></i>
                            <p>Yesterday<sup>.</sup>Clear</p>
                        </div>
                        <div className="yesterday-temperature">
                            <p>36<sup>o</sup> / 22<sup>o</sup></p>
                        </div>
                    </div>
                    <div className="today">
                        <div className="today-weather">
                            <i class="fa-solid fa-sun"></i>
                            <p>Today<sup>.</sup>{weatherText}</p>
                        </div>
                        <div className="today-temperature">
                            <p>{temperatureDegree}<sup>o</sup> / 22<sup>o</sup></p>
                        </div>
                    </div>
                    <div className="tomorrow"> 
                        <div className="tomorrow-weather">
                            <i class="fa-solid fa-cloud-bolt"></i>
                            <p>Tomorrow<sup>.</sup>Thunderstorm</p>
                        </div>
                        <div className="tomorrow-temperature">
                            <p>36<sup>o</sup> / 22<sup>o</sup></p>
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