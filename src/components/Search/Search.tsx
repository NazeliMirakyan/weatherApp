import { useState } from "react";
import { fetchWeatherData } from "../../redux/middlewere";
import Cities from "cities.json";
import style from "./search.module.scss";
import { ICites } from "../../redux/types/types";
import useAppDispatch from "../../hooks/useAppDispatch";
import Toggle from "../Toggle/Toggle";

const Search = () => {
  const [cityName, setCityName] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    const checkName = (Cities as ICites[]).find(
      (city) =>
        city.name ===
        cityName.charAt(0).toUpperCase() + cityName.slice(1).toLocaleLowerCase()
    );

    checkName ? dispatch(fetchWeatherData(cityName)) : alert("Enter City Name");

    setCityName("");
  };

  return (
    <div className={style.search_wrapper}>
      <div className={style.search_wrapper_input_container}>
        <input
          className={style.search_wrapper_input}
          placeholder="Search A City"
          value={cityName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCityName(e.target.value)
          }
        />
        <button onClick={handleSearch} className={style.search_wrapper_button}>
          Search
        </button>
      </div>
      <Toggle />
    </div>
  );
};
export default Search;
