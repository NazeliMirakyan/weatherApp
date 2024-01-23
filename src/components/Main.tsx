import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";
import CurrentCityWeather from "./CurrentCityWeather/CurrentCityWeather";
import DailyCityWeather from "./DailyCityWeather/DailyCityWeather";
import Search from "./Search/Search";
import style from "./main.module.scss";
import useAppSelector from "../hooks/useAppSelector";
import { fetchWeatherDataBegin } from "../redux/actions";
import { override } from "../constants/overrideConstant";

const Main = () => {
  const dispatch = useDispatch();
  const loading = useAppSelector(
    (state) => state.weatherReducer.loading
  );

  useEffect(() => {
    dispatch(fetchWeatherDataBegin());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <PacmanLoader cssOverride={override} color="#294270" size={30} />
      ) : (
        <div className={style.wrapper}>
          <div className={style.items}>
            <Search />
            <CurrentCityWeather />
            <DailyCityWeather />
          </div>
        </div>
      )}
    </>
  );
};
export default Main;
