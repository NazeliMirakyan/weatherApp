import axios from "axios";
import { weatherUrl } from "../../constants/urlConstant";
import { fetchWeatherDataSuccess } from "../actions";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const fetchWeatherData: any = (city: string) =>{
    return async (dispatch: Dispatch<AnyAction>)=> {
      const { data } = await axios.get(weatherUrl(city));
      dispatch(fetchWeatherDataSuccess(data));
    };
  }