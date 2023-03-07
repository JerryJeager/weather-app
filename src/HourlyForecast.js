const HourlyForecast = (props) => {
    let hours = props.hours
    // console.log(hours)
    return (
        <div className="hourly-forecast">
            {hours.length > 0 && hours.map(hr => (
                <div className="hours" key={hr.time}>
                    <p className="hour">{hr.time.split(" ")[1]}</p>
                    <h4 className="hour-temp">{hr.temp_c}<sup>o</sup></h4>
                    <img src={hr.condition.icon} alt="" />
                    <p>{hr.condition.text}</p>
                </div>
            ))}
        </div>
    );
}

export default HourlyForecast;