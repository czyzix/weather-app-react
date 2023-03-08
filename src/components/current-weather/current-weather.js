import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Warsaw</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src="icons/01d.png" alt="weather" className="weather-icon"/>
            </div>
            <div className="bottom">
                <p className="temperature">22°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">24°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">10 km/h</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">1000 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CurrentWeather;
