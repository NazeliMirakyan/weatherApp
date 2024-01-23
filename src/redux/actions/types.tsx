import { ICurrentWeather } from "../types/types";

export enum ActionType {
  FETCH_WEATHER_DATA_PENDING = "FETCH_WEATHER_DATA_PENDING",
  FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS",
  FETCH_WEATHER_DATA_FAIL = "FETCH_WEATHER_DATA_FAIL",
  TOGGLE_TEMP_DEGREE = "TOGGLE_TEMP_DEGREE",
  TOGGLE_TEMP_NOW = "TOGGLE_TEMP_NOW"
}

interface actionPending {
  type: ActionType.FETCH_WEATHER_DATA_PENDING;
}

interface actionSuccess {
  type: ActionType.FETCH_WEATHER_DATA_SUCCESS;
  payload: ICurrentWeather;
}

interface actionFail {
  type: ActionType.FETCH_WEATHER_DATA_FAIL;
  payload: any;
}

interface actionToggleTempDegree {
  type: ActionType.TOGGLE_TEMP_DEGREE;
  payload: string;
}
interface actionToggleTempNow {
  type: ActionType.TOGGLE_TEMP_NOW;
  payload:  string;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionFail
  | actionToggleTempDegree
  | actionToggleTempNow;
