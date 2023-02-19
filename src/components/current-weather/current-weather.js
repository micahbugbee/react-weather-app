import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">City</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/sunny.png" />
      </div>
      <div className="bottom">
        <p className="temperature">84°F</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label"></span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">88°F</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">15 mph</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">15%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">15 hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
