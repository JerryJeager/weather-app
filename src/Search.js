import { useState } from 'react'
import { useNavigate, Form } from "react-router-dom";
import SearchDetails from './SearchDetails';

const Search = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    const [inputValue, setInputValue] = useState('')
    const [suggestionList, setSuggestionList] = useState('')
    const [searchTemp, setSearchTemp] = useState('')
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [country, setCountry] = useState('')
    const [icon, setIcon] = useState('')
    const [weatherText, setWeatherText] = useState('')
    const [weatherData, setWeatherData] = useState('')

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)


    const key = "d793d287c872495ab2530755230503"
    const base = `https://api.weatherapi.com/v1/search.json`
    let query = ''
    let request = ''

    const suggestions = () => {
        query = `?key=${key}&q=${inputValue}`
        request = base + query
        fetch(request)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setSuggestionList(data)
                console.log(suggestionList)
                // console.log(data)
            })
            .catch(err => {
                console.log(err);
            });

    }

    const getWeather = () => {
        // setTimeout(() => {
            const base = `https://api.weatherapi.com/v1/current.json`
            query = `?key=${key}&q=${inputValue}`
            request = base + query
            fetch(request)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setWeatherData(data)
                    setSearchTemp(data.current.temp_c)
                    setName(data.location.name)
                    setRegion(data.location.region)
                    setCountry(data.location.country)
                    setIcon(data.current.condition.icon)
                    setWeatherText(data.current.condition.text)
                    console.log(data)
                })
                .catch(err => {
                    console.log(err);
                });

        // }, 2000)
        
    }


    return (
        <div className="search">
            <div className="header">
                <button onClick={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                <h2>Manage cities</h2>
            </div>
            <Form onSubmit={() => {
                getWeather()
                setIsFormSubmitted(true)
                console.log('clicked')
            }}>
                <button type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                <input type="text" list='items' placeholder="Enter location"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        suggestions()

                    }}
                />
                
                <datalist id="items">
                    {suggestionList && suggestionList.map(suggest => {
                        return (<option key={suggest.id} >{suggest.name}</option>)
                    })}
                </datalist>
            </Form>
            {isFormSubmitted && weatherData && <SearchDetails
               searchTemp={searchTemp}
               name={name}
               region={region}
               country={country}
               icon={icon}
               weatherText={weatherText}
             /> }
             {isFormSubmitted && !weatherData && <div className="bouncer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>}
        </div>
    );
}

export default Search;
