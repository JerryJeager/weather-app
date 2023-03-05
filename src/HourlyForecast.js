const HourlyForecast = (props) => {
    let hours = props.hours
    // console.log(hours)
    return (
        <div className="hourly-forecast">
            {hours.length > 0 && hours.map(hr => (
                <div className="hours" key={hr.condition.code}>
                    <p className="hour">{hr.time.split(" ")[1]}</p>
                    {hr.day && <h5>{hr.day.avgtemp_c}<sup>o</sup></h5>}
                    <img src={hr.condition.icon} alt="" />
                    <p>{hr.condition.text}</p>
                </div>
            ))}
        </div>
    );
}

export default HourlyForecast;