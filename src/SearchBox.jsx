import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';
/* eslint-disable react/prop-types */

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c015142340738f1912f5bb2e514d7fbe";
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            let res = await response.json();
            let result = {
                city: city,
                temp: res.main.temp,
                tempMin: res.main.temp_min,
                tempMax: res.main.temp_max,
                humidity: res.main.humidity,
                feelslike: res.main.feels_like,
                weather: res.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (error) {
            setError(true);
            console.error('Error fetching weather data:', error);
            throw error; // Propagate the error for further handling if needed
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
        // Reset error state when input changes
        setError(false);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
                    Search
                </Button>
                {error && <p style={{color:"red",fontWeight:"bold"}}>No weather info available for the  searched place!</p>}
            </form>
        </div>
    );
}
