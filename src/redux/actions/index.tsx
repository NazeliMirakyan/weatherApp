import { ActionType } from "./types";
import { ICurrentWeather } from "../types/types";

export const fetchWeatherDataBegin = () => ({
  type: ActionType.FETCH_WEATHER_DATA_PENDING,
});

export const fetchWeatherDataSuccess = (weatherList: ICurrentWeather[]) => ({
  type: ActionType.FETCH_WEATHER_DATA_SUCCESS,
  payload: { weatherList },
});

export const degreeOfTemperature = (deg: string) => {
  return {
    type: ActionType.TOGGLE_TEMP_DEGREE,
    payload: deg,
  };
};
export const fetchWeatherDataFail = (error: string) => ({
  type: ActionType.FETCH_WEATHER_DATA_FAIL,
  payload: { error },
});
