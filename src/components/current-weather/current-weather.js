import { useEffect, useState } from "react";
import "./current-weather.css";

const CurrentWeather = ({data}) => {

    const [ imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        if (imgSrc === `icons/${data.weather[0].icon}.png`) {
            document.body.style.backgroundImage = `url('backgrounds/${data.weather[0].icon}.jpg')`
        }
    }, [imgSrc]);

    const handleImgSrcChange = (event) => {
        setImgSrc(event.target.src);
    };

    return (
        <div>
            <label className="title">CURRENT</label>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weather-description">{data.weather[0].description}</p>
                    </div>
                    <img onLoad={handleImgSrcChange} src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" id="coco"/>
                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label top">Details</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{data.main.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{data.main.pressure} hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CurrentWeather;
