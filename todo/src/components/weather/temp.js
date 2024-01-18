import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url =`http://api.weatherapi.com/v1/forecast.json?key=58422350527948fc9cc25055241801&q=${searchValue}&days=1&aqi=no&alerts=no`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp_c, humidity, pressure_mb } = data.current;
      const { text : weathermood } = data.current.condition;
      const { name,country} = data.location;
      const { wind_kph } = data.current;
      const { sunset } = data.forecast.forecastday[0].astro;
      console.log(temp_c,humidity,pressure_mb,weathermood,name,wind_kph,country,sunset);
      const myNewWeatherInfo = {temp_c,humidity,pressure_mb,weathermood,name,wind_kph,country,sunset};
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;

// // we can use different types of date format like given below
// const currentDate = new Date();
// const customFormattedString = `${curre
// ntDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
// console.log(customFormattedString);
