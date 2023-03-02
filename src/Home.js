import { Link } from "react-router-dom";
import Search from "./Search";


import WeatherDetails from "./WeatherDetails";


const Home = () => {
    return ( 
        <div className="home-page" style={{background: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/img/clouds.jpg) center/cover no-repeat fixed"}}>
            <header>
                <div className="search-btn">
                    <Link to={ <Search/> }><i class="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
                </div>
                <div className="city-name">
                    <h2>Nsukka</h2>
                </div>
            </header>
            <WeatherDetails />
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
    );
}
 
export default Home;