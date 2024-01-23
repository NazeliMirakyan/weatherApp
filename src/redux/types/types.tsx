export interface IWeather {
    icon: string;
    id: number;
    main: string;
    description: string;
  }
  export interface ICites {
    name : string
  }
  export interface IDailyWeatherData {
    name?: string;
    dt: number;
    dt_txt: string;
    main: { temp: number };
    weather: IWeather[];
  }
  export interface IWeatherList {
    list: IDailyWeatherData[];
    city: {
      id: number;
      name: string;
    };
  }
  export interface ICurrentWeather {
    weatherList: any;
    list: IDailyWeatherData[];
    city: {
      id: number;
      name: string;
    };
  }
  export interface IInitialState {
    dailyWeatherData: IDailyWeatherData[];
    currentWeather: ICurrentWeather[];
    degree: string,
    loading: boolean;
    error: null;
  }
