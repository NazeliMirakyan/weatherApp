import { useState } from "react";
import { useDispatch } from "react-redux";
import { degreeOfTemperature } from "../../redux/actions/index";
import style from './toggle.module.scss';

const Toggle = () => {
  const dispatch = useDispatch();
  const [temp, setTemp] = useState("C");
 
  const check = (temperature: string) => (): void => {
    setTemp(temperature);
    dispatch(degreeOfTemperature(temp));
  };
  return (
    <>
    <div className={style.toggle_wrapper}>
      <input
        name="toggle"
        type="radio"
        onChange={check("C")}
        checked={temp === "C"}
      />
      <label>°C</label>

      <input
        name="toggle"
        type="radio"
        onChange={check("F")}
        checked={temp === "F"}
      />
      <label>°F</label>
    </div>
    </>
  );
};

export default Toggle;
