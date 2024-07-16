import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
// import "./WeatherApp.css";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            feelslike: 30,
            humidity: 83,
            temp: 26.99,
            tempMax: 26.99,
            tempMin: 26.99,
            weather: "mist",
            city: "Mumbai",
    });

    let updateInfo = (res) => {
        setWeatherInfo(res);
    }
  return (
      <div
          className="weatherApp" style={{ textAlign: "center" }}>
          <br />
          <h1 style={{border:"2px solid black"}}><b>Forecast - Finder (<i>Live Weather Updates</i>
              )</b></h1>
          <br /><br />
          <SearchBox updateInfo={ updateInfo} />
          <InfoBox data={weatherInfo } />
    </div>
  );
}
