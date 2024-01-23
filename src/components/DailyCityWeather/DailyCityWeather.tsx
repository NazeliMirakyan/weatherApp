import style from "./dailyCityWeather.module.scss";
import { IDailyWeatherData } from "../../redux/types/types";
import useAppSelector from "../../hooks/useAppSelector";
import { getWeekDays } from "../../helper/weekDays";
import { Temp } from "../../helper/temperature";

const DailyCityWeather = () => {
  const dailyWeather: IDailyWeatherData[] = useAppSelector(
    (state) => state.weatherReducer.dailyWeatherData
  );

  return (
    <div className={style.wrapper}>
      {dailyWeather.map((days) => {
        return (
          <div key={days.dt} className={style.wrapper_dailyWeather_items}>
            <h4>{getWeekDays(days.dt_txt.slice(0, 10))}</h4>
            <p>
              {!Temp(days.main.temp)
                ? Math.floor(days.main.temp - 273.15) + "°C"
                : Temp(days.main.temp)}
            </p>
            {days.weather.map((day) => {
              return (
                <div key={day.id}>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                    alt=""
                  />
                  <p>{day.main}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default DailyCityWeather;
