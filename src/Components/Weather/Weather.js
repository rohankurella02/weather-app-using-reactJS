import React, { useEffect, useState } from 'react'
import '../Weather/Weather.scss'
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import getFormattedWeatherData, {getWeatherData, iconUrlFromCode, formatToLocalTime} from '../../weatherService';
import cloud from '../../Assets/cloud.svg'
import sunnyMist from '../../Assets/sunnyMist.svg'
import thunder from '../../Assets/thunder.svg'
import cloudy from '../../Assets/cloudy.svg'
import rain from '../../Assets/rain.svg'
import clear from '../../Assets/clear.svg'
import {animatedCloud as Svg} from '../../Assets/animatedCloud.svg'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import Forecast from '../Forecast/Forecast';
import { DateTime } from "luxon";

function Weather() {

    const [city, setCity] = useState('Mumbai')
    const [time, setTime] = useState(formatToLocalTime(Math.round((new Date()).getTime() / 1000)))
    const [weatherData, setWeatherData] = useState(null)
    const icon = {
        "11d": thunder,
        "11n": thunder,
        "03d": cloudy,
        "03n": cloudy,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "50d": sunnyMist,
        "50n": sunnyMist,
        "01d": clear,
        "01n": clear,
        "02d": cloudy,
        "02n": cloudy,
        "04d": cloudy,
        "04n": cloudy,
    }
    setInterval(function () {
        setTime(formatToLocalTime(Math.round((new Date()).getTime() / 1000)))
    }, 2000)

    useEffect(() => {
        const getWeather = async () => {
            const data = await getFormattedWeatherData({ q: city }).then(
                (data) => {
                    console.log(data)
                    //console.log(data.hourly)
                    setWeatherData(data)
                }
            ).catch(err => console.log(err))
            
        }
        getWeather()
        
        // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0eda323703fe333a76e2f05312904766`)
        //     .then(res => {
        //         setWeatherData(res.data)
        //     })
        // console.log(weatherData)
    }, [city])
    useEffect(() => {
        var ts = Math.round((new Date()).getTime() / 1000);
    })



    return (
        <div style={{ color: "white" }}>

            { weatherData && <div className="wContainer">
                <div className="dropdown">
                    <p>Please select a City from the dropdown below</p>
                    <form action="">
                        <Dropdown value={city} options={['Mumbai', 'Pune', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Delhi', 'London', 'Cupertino', 'Berlin']} onChange={(e) => { setCity(e.value) }} />
                    </form>
                </div>
                <div className="time">
                    <div className="dayText"></div>
                    <div className="timeText"> {time}</div>
                </div>
                <div className="cityName">
                    {weatherData.name}, {weatherData.country}
                </div>
                <div className="weatherInfo">
                    {weatherData.details}
                </div>
                <div className="weather">
                    <div className="weatherLogo">
                        <img src={icon[weatherData.icon]} alt={weatherData.icon} />
                    </div>
                    <div className="temp">{Math.floor(weatherData.temp)}℃</div>
                    <div className="moreInfo">
                        <div style={{ display: "flex", }} className="realTemp">
                            <UilTemperature style={{ marginRight: "14px" }} /> Feels Like: <span style={{ marginLeft: "12px", fontWeight: "600" }} >{Math.floor(weatherData.feels_like)}℃</span>
                        </div>
                        <div style={{ display: "flex", }} className="humidity">
                            <UilTear style={{ marginRight: "14px" }} /> Humidity: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{Math.floor(weatherData.humidity)}%</span>
                        </div>
                        <div style={{ display: "flex", }} className="wind">
                            <UilWind style={{ marginRight: "14px" }} />  Wind: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{Math.floor(weatherData.speed)} KM/h</span>
                        </div>
                    </div>
                </div>
                <div className="extraInfo">
                    <div style={{ display: "flex", }} className="rise">
                        <UilSun style={{ marginRight: "6px" }} /> Sunrise: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{ DateTime.fromSeconds(weatherData.sunrise).toFormat('hh:mm a') }</span>
                    </div>
                    <div style={{ display: "flex", }} className="set">
                        <UilSunset style={{ marginRight: "6px" }} /> Sunset: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{ DateTime.fromSeconds(weatherData.sunset).toFormat('hh:mm a') }</span>
                    </div>
                    <div style={{ display: "flex", }} className="high">
                        <UilArrowUp style={{ marginRight: "6px" }} /> High: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{Math.floor(weatherData.temp_max)}℃</span>
                    </div>
                    <div style={{ display: "flex", }} className="low">
                        <UilArrowDown style={{ marginRight: "6px" }} /> Low: <span style={{ marginLeft: "12px", fontWeight: "600" }}>{Math.floor(weatherData.temp_min)}℃</span>
                    </div>
                </div>
                <Forecast title={"Hourly Forecast"} payload={weatherData.hourly} />
                <Forecast title={"Weekly Forecast"} payload={weatherData.daily} />
            </div>}
        </div>
    )
}

export default Weather