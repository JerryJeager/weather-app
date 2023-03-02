import { Link } from "react-router-dom";

const DayForecast = () => {
    return ( 
        <div className="day-forecast">
            <div className="header">
                <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
                <h2>5-day forecast</h2>
            </div>
        </div>
    );
}
 
export default DayForecast;