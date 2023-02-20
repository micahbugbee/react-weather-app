import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

  return (
    <>
      <label className="title">7-Day Forecast</label>
      <Accordion allowZeroExpanded>
        {data.forecastResponse.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="high-low">{Math.round(item.main.temp_max)}°F / {Math.round(item.main.temp_min)}°F</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{Math.round(item.main.feels_like)}°F</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind:</label>
                        <label>{Math.round(item.wind.speed)} mph</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
