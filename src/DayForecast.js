import { useNavigate } from "react-router-dom"

const DayForecast = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    return ( 
        <div className="day-forecast">
            <div className="header">
                <button onClick={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                <h2>5-day forecast</h2>
            </div>
        </div>
    );
}
 
export default DayForecast;