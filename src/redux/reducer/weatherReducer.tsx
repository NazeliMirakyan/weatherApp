import { ActionType, Action } from "../actions/types";
import { IInitialState, IWeather, IDailyWeatherData } from "../types/types";

const initialState: IInitialState = {
  dailyWeatherData: [],
  currentWeather: [],
  degree: "",
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.FETCH_WEATHER_DATA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionType.FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dailyWeatherData: [
          ...new Map<IDailyWeatherData, IDailyWeatherData>(
            action.payload.weatherList.list.map(
              (item: { dt_txt: string; weather: IWeather[] }) => [
                item["dt_txt"].slice(0, 10),
                item,
              ]
            )
          ).values(),
        ],
        currentWeather: [action.payload.weatherList].filter(
          (_: null, index: number) => index === 0
        ),
      };
    case ActionType.TOGGLE_TEMP_DEGREE:
      return {
        ...state,
        degree: action.payload,
      };
    case ActionType.FETCH_WEATHER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
