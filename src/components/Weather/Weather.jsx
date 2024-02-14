import "./style.css";

import { useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Weather = () => {
  const [data, setData] = useState();
  //   let url =
  //     " https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=fad5fc03d7204c4aa532b7d3634a2062";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
         "your api "
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const weatherData = await res.json();
        setData(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, []);

  const date = new Date().toLocaleDateString(data?.dt);
  const time = new Date().toLocaleTimeString(data?.dt);
  const temp = (data?.main.temp - 273.15).toFixed();

  return (
    <div className="weather">
      <div className="weather-top">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="weather-bottom">
        <div className="condition">
          <FaCloud className="cloud" />
          <span className="">{data?.weather[0].main}</span>
        </div>
        <div className="temp-pressure">
          <span className="temp">{`${temp}\u00b0C`} </span>
          <span className="">
            <WiBarometer />
            {data?.main.pressure} mbar Pressure
          </span>
        </div>
        <div className="wind-humidity">
          <span className="wind">
            <FiWind />
            {data?.wind.speed} km/h Wind
          </span>
          <span className="humidity">
            <WiHumidity />
            {data?.main.humidity}% Humidity
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
