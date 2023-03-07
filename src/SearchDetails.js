


const SearchDetails = ({searchTemp, name, region, country, icon, weatherText}) => {
  return (
    <div className="search-details">
        <div className="location">
            <p>{name}</p>
            <h2>{region}, {country}</h2>
        </div>
        <div className="search-weather-details">
            <p>{searchTemp}<sup>o</sup>C</p>
            <img src={icon} alt="icon" />
            <p>{weatherText}</p>
        </div>
    </div>
  )
}

export default SearchDetails