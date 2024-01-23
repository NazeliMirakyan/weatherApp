import React, { useEffect } from "react";
import { fetchWeatherData } from "../../redux/middlewere";
import style from "./currentCityWeather.module.scss";
import { ICurrentWeather } from "../../redux/types/types";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { Temp } from "../../helper/temperature";

const CurrentCityWeather = () => {
  const dispatch = useAppDispatch();

  const currentWeather: ICurrentWeather[] = useAppSelector(
    (state) => state.weatherReducer.currentWeather
  );

  useEffect(() => {
    dispatch(fetchWeatherData("Yerevan"));
  }, [dispatch]);

  return (
    <>
      {currentWeather !== undefined &&
        currentWeather.map((weather) => {
          return (
            <div key={weather.city.id} className={style.wrapper}>
              <p className={style.wrapper_city_name}>{weather.city.name}</p>
              <p>Today</p>
              {weather.list
                .filter((_, index) => index === 0)
                .map((item) => {
                  return (
                    <div
                      key={item.dt}
                      className={style.wrapper_current_weather}
                    >
                      <p>
                        Temperature:{" "}
                        {!Temp(item.main.temp)
                          ? Math.floor(item.main.temp - 273.15) + "°C"
                          : Temp(item.main.temp)}
                      </p>
                      {item.weather.map((day) => {
                        return (
                          <React.Fragment key={day.id}>
                            <img
                              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                              alt=""
                            />
                            <h3>{day.main}</h3>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          );
        })}
    </>
  );
};
export default CurrentCityWeather;
