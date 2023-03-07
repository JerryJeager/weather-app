import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

import useFetch from "./useFetch"

const DayForecast = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    const { weatherData: data, fiveDayForecast } = useFetch(5)


    return (
        <div className="day-forecast">
            <div className="header">
                <button onClick={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                <h2>5-day forecast</h2>
            </div>
            
            
            {fiveDayForecast && fiveDayForecast.map((forecastDay) => {
                return (
                <div className="forecast" key={forecastDay.date}>
                        <div className="day"> <p>{new Date(forecastDay.date).toDateString()}</p> </div>
                    <div className="forecast-info">
                        <h4>{forecastDay.day.avgtemp_c}<sup>o</sup></h4>
                        <img src={forecastDay.day.condition.icon} alt="" />
                        <p>{forecastDay.day.condition.text}</p>
                    </div>
                </div>)
            })}

            {!fiveDayForecast && <div className="bouncer">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            
        </div>
    );
}
export default DayForecast;